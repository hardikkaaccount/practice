// Asynchronous JavaScript

// Callbacks
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    callback(null, "Data fetched with callback");
  }, 1000);
}

fetchDataWithCallback((error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log(data);
  }
});

// Callback hell example
function getUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: "John Doe" });
  }, 100);
}

function getPosts(userId, callback) {
  setTimeout(() => {
    callback(null, [{ userId, title: "Post 1" }, { userId, title: "Post 2" }]);
  }, 200);
}

function getComments(postId, callback) {
  setTimeout(() => {
    callback(null, [{ postId, text: "Comment 1" }, { postId, text: "Comment 2" }]);
  }, 150);
}

// Callback hell - nested callbacks
getUser(1, (err, user) => {
  if (err) return console.error(err);
  
  getPosts(user.id, (err, posts) => {
    if (err) return console.error(err);
    
    getComments(posts[0].id, (err, comments) => {
      if (err) return console.error(err);
      
      console.log("User:", user);
      console.log("Posts:", posts);
      console.log("Comments:", comments);
    });
  });
});

// Promises
function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Data fetched with promise");
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 1000);
  });
}

fetchDataWithPromise()
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Promise chaining
function getUserPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: "John Doe" });
    }, 100);
  });
}

function getPostsPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ userId, title: "Post 1" }, { userId, title: "Post 2" }]);
    }, 200);
  });
}

function getCommentsPromise(postId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ postId, text: "Comment 1" }, { postId, text: "Comment 2" }]);
    }, 150);
  });
}

// Promise chaining to avoid callback hell
getUserPromise(1)
  .then(user => {
    console.log("User:", user);
    return getPostsPromise(user.id);
  })
  .then(posts => {
    console.log("Posts:", posts);
    return getCommentsPromise(posts[0].id);
  })
  .then(comments => {
    console.log("Comments:", comments);
  })
  .catch(error => console.error("Error in chain:", error));

// Promise.all - executing multiple promises in parallel
Promise.all([
  fetchDataWithPromise(),
  getUserPromise(2),
  getPostsPromise(2)
]).then(results => {
  console.log("All promises resolved:", results);
}).catch(error => {
  console.error("At least one promise failed:", error);
});

// Promise.race - first promise to settle
Promise.race([
  fetchDataWithPromise(),
  new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), 500))
]).then(result => {
  console.log("First promise won:", result);
}).catch(error => {
  console.error("Race lost:", error);
});

// Async/Await
async function fetchDataAsync() {
  try {
    const data = await fetchDataWithPromise();
    console.log("Async/Await result:", data);
    return data;
  } catch (error) {
    console.error("Async/Await error:", error);
    throw error;
  }
}

fetchDataAsync();

// Async/Await to avoid callback hell
async function fetchUserData() {
  try {
    const user = await getUserPromise(1);
    console.log("User:", user);
    
    const posts = await getPostsPromise(user.id);
    console.log("Posts:", posts);
    
    const comments = await getCommentsPromise(posts[0].id);
    console.log("Comments:", comments);
    
    return { user, posts, comments };
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUserData();

// Error handling with async/await
async function handleErrors() {
  try {
    await fetchDataWithPromise();
  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

handleErrors();

// Parallel execution with async/await
async function parallelExecution() {
  try {
    const [data, user, posts] = await Promise.all([
      fetchDataWithPromise(),
      getUserPromise(3),
      getPostsPromise(3)
    ]);
    
    console.log("Parallel results:", { data, user, posts });
  } catch (error) {
    console.error("Parallel execution error:", error);
  }
}

parallelExecution();