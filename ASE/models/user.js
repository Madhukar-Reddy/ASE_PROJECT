const config = require('config'); 
const jwt = require('jsonwebtoken');
const joi = require('Joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{

        type:String,
        required:true
    },

    email:{

        type:String,
        required:true,
        unique:true
    },

    password:{

        type:String,
        required:true,
        minlength:5
    },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id : this._id}, config.get('jwtPrivatekey'));
    return token;

}

const User = mongoose.model('User', userSchema);

function validateUser (User){
     const schema ={
          name: joi.string().required(),
          email: joi.string().required().email(),
          password: joi.string().min(5).required(),
     };

     return joi.validate(User, schema);
     }

     exports.User = User;
     exports.validate = validateUser;