const express = require('express'); 
const bodyParser = require('body-parser'); 

const app = express(); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tasks = []; 

// Serve static files (CSS, JavaScript, etc.)
app.use(express.static('public'));

// Route all other requests to your main HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/tasks', (req, res) => {
    res.json(tasks);
  });
  
  app.post('/tasks', (req, res) => {
    const { task } = req.body;
    if (task) {
      tasks.push(task);
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'Task cannot be empty' });
    }
  });
  
  app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    if (!isNaN(taskId) && taskId >= 0 && taskId < tasks.length) {
      tasks.splice(taskId, 1);
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'Invalid task ID' });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });