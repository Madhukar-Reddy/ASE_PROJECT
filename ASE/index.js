const config = require('config');
const joi = require('Joi');
const bodyParser = require('body-parser');
//joi.objectId = require('joi-objectId').joi();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const users = require('./routes/users');
const auth = require('./routes/auth');
var cors = require('cors');



if(!config.get("jwtPrivatekey")){
    console.log('FATAL ERROR : jwtPrivatekey is not defined');
    process.exit(1);
}


mongoose.connect('mongodb://localhost/Customer')
 .then(()=> console.log('Connected to Mongodb...'))
 .catch(err =>console.error('Could not connect to Mongodb...'));

 app.use(express.json());
 app.use(cors());
 app.use(
     bodyParser.urlencoded({
         extended : false
     })
 )
 app.use('/api/users', users);
 app.use('/api/auth', auth);

 const port =   process.env.PORT || 3000;
 app.listen(port, ()=> console.log(`listening on port ${port}...`));


 

