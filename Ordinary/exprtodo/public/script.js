// public/script.js
function addTask() {
  const taskInput = document.getElementById('task');
  const taskText = taskInput.value.trim();
  if (taskText) {
      const taskList = document.getElementById('taskList');
      const li = document.createElement('li');
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = '';
      taskInput.focus();
      sendTaskToServer(taskText);
  }
}

function sendTaskToServer(taskText) {
  fetch('/tasks', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: taskText }),
  })
  .then((response) => response.json())
  .then((data) => {
      if (data.success) {
          console.log('Task added successfully.');
      } else {
          console.error('Failed to add task:', data.error);
      }
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}

// Function to initialize the task list from the server
function initializeTaskList() {
  fetch('/tasks')
  .then((response) => response.json())
  .then((data) => {
      const taskList = document.getElementById('taskList');
      data.forEach((taskText) => {
          const li = document.createElement('li');
          li.textContent = taskText;
          taskList.appendChild(li);
      });
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}

// Call the function to initialize the task list when the page loads
window.onload = initializeTaskList;
