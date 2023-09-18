const express = require('express'); 
const mongoose = require('mongoose'); 

const app = express(); 

app.use(express.json()); 
require('dotenv').config(); 


const port = process.env.PORT; 
const url = process.env.MONGO_URL

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => console.log(`connected to mongodb Atlas`))
.catch((err) =>console.error(`error could not connect to atlas`, err)); 

const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true}, 
    password: {type: String, required: true},
});
const UserModel = mongoose.model('User', UserSchema); 


const Routes = {
    register: '/auth/register', 
    login: '/auth/login'
}; 



mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });


app.use(express.static(__dirname + 'public')); 


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/pubic/index.html'); 
}); 


app.listen(port, () =>{
    console.log(`server is running on port ${port}`); 
}); 