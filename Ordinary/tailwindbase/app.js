const express = require('express'); 
const port = 3000; 

const app = express(); 

app.use(express.static('public')); 

app.use('/', (req, res) => {

}); 

app.listen(port, () =>{
    console.log('port 3000 server is running!!'); 
}); 