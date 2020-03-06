import axios from 'axios';

export const register = newUser =>{
      return axios 
         .post ('http://localhost:3000/api/users/', {
             name:newUser.name,
             email:newUser.email,
             password:newUser.password,
         })

         .then(res =>{
              console.log('Registered');
              console.log(res);
              return res;
         })
}


export const login = user => {
     return axios 
      .post('http://localhost:3000/api/auth/',{
          email:user.email,
          password:user.password,
      })

      .then(res =>{
          localStorage.setItem('x-auth-token', res.data)
          return res.data
      })

      .catch(err => {
           console.log(err)
      })
}