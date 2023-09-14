const express = require('express'); 
const bodyParser = require('body-parser'); 
port = 3000; 
const app = express(); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tasks = []; 

// Serve static files (CSS, JavaScript, etc.)
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); 
}); 

app.get('/tasks', (req, res) => {
  res.json(tasks); 
});

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  if (task) {
      tasks.push(task);
      res.json({ success: true });
  } else {
      res.status(400).json({ success: false, error: 'Task cannot be empty' });
  }
});

// API endpoint to delete a task by index
app.delete('/tasks/:index', (req, res) => {
  const index = req.params.index;
  if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      res.json({ success: true });
  } else {
      res.status(400).json({ success: false, error: 'Invalid task index' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 
