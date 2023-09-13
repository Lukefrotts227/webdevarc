const express = require('express'); 

const app = express(); 

const port = 3000; 


app.get('/', (req, res) => {
    res.send('Hello there express!!!'); 
})

app.get('/myRoute', (req, res) => {
    res.send("This is my own route thank you for coming here today!!!!!"); 
})

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

}); 