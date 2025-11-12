import { v4 as uuidv4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.getElementById('list') as HTMLUListElement | null;
const completedList = document.getElementById('completed-list') as HTMLUListElement | null;
const form = document.getElementById('new-task-form') as HTMLFormElement | null;
const input = document.getElementById('new-task-title') as HTMLInputElement | null;

if (!list || !completedList || !form || !input) {
  throw new Error('Required DOM elements (#list, #completed-list, #new-task-form, #new-task-title) not found.');
}

const taskList: Task[] = loadPendingTasks();
const completedTasks: Task[] = loadCompletedTasks();

taskList.forEach(addListItem);
completedTasks.forEach(addCompletedListItem);

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = input.value?.trim();
  if (!title) return;

  const task: Task = {
    id: uuidv4(),
    title,
    completed: false,
    createdAt: new Date(),
  };

  taskList.push(task);
  addListItem(task);
  saveTasks();
  input.value = '';
  arrayList();
});

function addListItem(task: Task) {
  const item = document.createElement('li');

  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = task.completed; 
  const titleSpan = document.createElement('span');
  titleSpan.textContent = ' ' + task.title;
  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;

    if (checkbox.checked) {
      const idx = taskList.findIndex(t => t.id === task.id);
      if (idx !== -1) taskList.splice(idx, 1);
      completedTasks.push(task);
      item.remove();
      addCompletedListItem(task);
    } else {
      const idx = completedTasks.findIndex(t => t.id === task.id);
      if (idx !== -1) completedTasks.splice(idx, 1);
      taskList.push(task);

      item.remove();
      addListItem(task);
    }

    saveTasks();
    arrayList();
  });

  label.appendChild(checkbox);
  label.appendChild(titleSpan);
  item.appendChild(label);

  list.appendChild(item);
}

function addCompletedListItem(task: Task) {
  const item = document.createElement('li');

  const titleSpan = document.createElement('span');
  titleSpan.textContent = task.title;
  const restoreBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  restoreBtn.textContent = 'Restore';
  deleteBtn.style.marginLeft = '8px';
  restoreBtn.style.marginLeft = '8px';
  restoreBtn.addEventListener('click', () => {
    const idx = completedTasks.findIndex(t => t.id === task.id);
    if (idx !== -1) completedTasks.splice(idx, 1); 
    task.completed = false;
    taskList.push(task);

    item.remove();
    addListItem(task);

    saveTasks();
    arrayList();
  });
  deleteBtn.addEventListener('click', () => {
    const idx = completedTasks.findIndex(t => t.id == task.id)
    if (idx !== -1) completedTasks.splice(idx, 1);
    item.remove();
    
  });
  
  item.appendChild(titleSpan);
  item.appendChild(restoreBtn);
  item.appendChild(deleteBtn)
  completedList?.appendChild(item);
}

function saveTasks() {
  const serializablePending = taskList.map(t => ({ ...t, createdAt: t.createdAt.toISOString() }));
  const serializableCompleted = completedTasks.map(t => ({ ...t, createdAt: t.createdAt.toISOString() }));

  localStorage.setItem('tasks', JSON.stringify(serializablePending));
  localStorage.setItem('completed', JSON.stringify(serializableCompleted));
}

function loadPendingTasks(): Task[] {
  const raw = localStorage.getItem('tasks');
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as Array<Record<string, any>>;
    return parsed.map(p => ({
      id: String(p.id),
      title: String(p.title),
      completed: Boolean(p.completed),
      createdAt: p.createdAt ? new Date(p.createdAt) : new Date(),
    }));
  } catch {
    return [];
  }
}

function loadCompletedTasks(): Task[] {
  const raw = localStorage.getItem('completed');
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as Array<Record<string, any>>;
    return parsed.map(p => ({
      id: String(p.id),
      title: String(p.title),
      completed: Boolean(p.completed),
      createdAt: p.createdAt ? new Date(p.createdAt) : new Date(),
    }));
  } catch {
    return [];
  }
}

function arrayList() {
  console.log('Completed List', completedTasks);
  console.log('Task List', taskList);
}
