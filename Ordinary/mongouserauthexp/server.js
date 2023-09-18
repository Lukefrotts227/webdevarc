const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express(); 
require('dotenv').config(); 


const port = process.env.PORT; 
const url = process.env.MONGO_URL

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => console.log(`connected to mongodb Atlas`))
.catch((err) =>console.error(`error could not connect to atlas`, err)); 



mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });

  
app.use(express.static(__dirname + '/public')); 


app.listen(port, () =>{
    console.log(`server is running on port ${port}`); 
}); 