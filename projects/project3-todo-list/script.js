// Todo List Project

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const filterButtons = document.querySelectorAll('.filter-btn');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Render todos based on current filter
function renderTodos() {
  todoList.innerHTML = '';
  
  let filteredTodos = [];
  switch (currentFilter) {
    case 'active':
      filteredTodos = todos.filter(todo => !todo.completed);
      break;
    case 'completed':
      filteredTodos = todos.filter(todo => todo.completed);
      break;
    default:
      filteredTodos = [...todos];
  }
  
  if (filteredTodos.length === 0) {
    todoList.innerHTML = '<li class="empty">No todos found</li>';
    return;
  }
  
  filteredTodos.forEach((todo, index) => {
    const todoIndex = todos.indexOf(todo);
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''} data-index="${todoIndex}">
      <span>${todo.text}</span>
      <button class="delete-btn" data-index="${todoIndex}">Delete</button>
    `;
    todoList.appendChild(li);
  });
  
  updateCount();
}

// Add new todo
function addTodo() {
  const text = todoInput.value.trim();
  if (text) {
    todos.push({
      text: text,
      completed: false,
      createdAt: new Date()
    });
    saveTodos();
    todoInput.value = '';
    renderTodos();
  }
}

// Toggle todo completion
function toggleTodo(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos();
}

// Delete todo
function deleteTodo(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

// Update todo count
function updateCount() {
  const activeCount = todos.filter(todo => !todo.completed).length;
  document.getElementById('count').textContent = `${activeCount} items left`;
}

// Set filter
function setFilter(filter) {
  currentFilter = filter;
  filterButtons.forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderTodos();
}

// Clear completed todos
function clearCompleted() {
  todos = todos.filter(todo => !todo.completed);
  saveTodos();
  renderTodos();
}

// Event listeners
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') {
    toggleTodo(e.target.dataset.index);
  } else if (e.target.classList.contains('delete-btn')) {
    deleteTodo(e.target.dataset.index);
  }
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    setFilter(btn.dataset.filter);
  });
});

document.getElementById('clear-completed').addEventListener('click', clearCompleted);

// Initialize
renderTodos();