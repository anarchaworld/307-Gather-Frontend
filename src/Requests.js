import axios from 'axios';

async function makeAccountPostCall(person){
   try {
   const response = await axios.post('http://localhost:5000/users', person);
   return response;
   }
   catch (error) {
   console.log(error);
   return false;
   }
}

export function addAccount(person) {
   makeAccountPostCall(person).then( result => {
   if (result && result.status === 201)
      console.log('CreateAccount: Success!');
   });  
}

async function makeLoginPostCall(person){
   try {
   const response = await axios.post('http://localhost:5000/login', person);
   return response;
   }
   catch (error) {
   console.log(error);
   return false;
   }
}

export function checkCredentials(person) {
   makeLoginPostCall(person).then( result => {
   if (result && result.status === 200)
      console.log('Login: Success!');
   else
      console.log('Login: Failure.');
   });  
}
