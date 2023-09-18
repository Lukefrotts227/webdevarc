const express = require('express'); 
require('dotenv').config(); 

const port = process.env.PORT; 
const url = process.env.MONGO_URL