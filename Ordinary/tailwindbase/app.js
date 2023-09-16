const express = require('express'); 
const port = 3000; 

const app = express(); 

app.use(express.static('public')); 

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); 
}); 

app.listen(port, () =>{
    console.log('port 3000 server is running!!'); 
}); 