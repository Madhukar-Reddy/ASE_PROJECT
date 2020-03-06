const joi = require('Joi');
const bcrypt = require('bcryptjs');
const lodash = require('lodash');
const{User} = require('../models/user.js');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async(req,res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({email: req.body.email});
    if (!user) return res.send('Invalid email or password');
   
       const validpassword = await bcrypt.compare(req.body.password, user.password);
       if (!validpassword) return res.send('Invalid email or password');

       const token = user.generateAuthToken();
        res.send(token);
    });



function validate (req){
    const schema ={
         email: joi.string().required().email(),
         password: joi.string().min(5).required(),
    };

    return joi.validate(req, schema);
    }

    
    module.exports = router; 