document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
  
    function fetchTasks() {
      fetch('/tasks')
        .then(response => response.json())
        .then(data => {
          taskList.innerHTML = '';
          data.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `${task} <button class="delete" data-id="${index}">Delete</button>`;
            taskList.appendChild(listItem);
          });
        });
    }
  
    addTaskButton.addEventListener('click', () => {
      const task = taskInput.value;
      if (task) {
        fetch('/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ task }),
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              taskInput.value = '';
              fetchTasks();
            }
          });
      }
    });
  
    taskList.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        const taskId = event.target.getAttribute('data-id');
        fetch(`/tasks/${taskId}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              fetchTasks();
            }
          });
      }
    });
  
    fetchTasks();
  });
  