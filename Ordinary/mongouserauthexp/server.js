const express = require('express'); 
const mongoose = require('mongoose'); 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express(); 

app.use(express.json()); 
require('dotenv').config(); 


const port = process.env.PORT; 
const url = process.env.MONGO_URL;
const secret = process.env.JWT_SECRET; 

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => console.log(`connected to mongodb Atlas`))
.catch((err) =>console.error(`error could not connect to atlas`, err)); 


// for future use some of the code specificall this will be seperated into other files for organization
const UserSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true}, 
    password: {type: String, required: true},
});
const UserModel = mongoose.model('User', UserSchema); 

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try{
            const user = await UserModel.findOne({ username }); 
            if(!user) return done(null, false); 

            const validPassword = await bcrypt.compare(password, user.password); 
            if(!validPassword) return done(null, false); 

            return (null, user); 

        }catch(error) {
            return done(error, false); 
        }
    })
); 


const Routes = {
    index: '/',
    register: '/auth/register', 
    login: '/auth/login', 
    success: '/page/success', 
}; 



mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });


app.use(express.static('public')); 

app.set('jwtSecret', secret); 

app.post(Routes.register, async (req, res) => {
    const { username, password } = req.body; 

    try{

        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = new UserModel({ username, password: hashedPassword }); 

        await newUser.save(); 

        res.status(201).json({ message: 'Registered!!'}); 

    } catch(error) {
        console.error("Error:", error); 
        res.status(500).json({ error: 'Failed to register' }); 
    }
}); 

app.post(Routes.login, passport.authenticate('local', {session: false }), (req, res) => {
    const user = req.user; 
    const token = jwt.sign({ sub: user._id }, app.get('jwtSecret')); 
    res.json({ token }); 
});


app.get(Routes.index, (req, res) =>{
    res.sendFile(__dirname + '/public/index.html'); 
}); 

app.get(Routes.success, passport.authenticate('jwt', { session: false }) ,(req, res) => {
    res.sendFile(__dirname + '/public/main.html');
}); 




app.listen(port, () =>{
    console.log(`server is running on port ${port}`); 
}); 