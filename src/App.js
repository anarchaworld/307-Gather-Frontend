import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Welcome from "./Welcome";
import Login from "./Login";
import Signup from "./Signup";
import axios from 'axios';

export default function App() {

  async function makePostCall(person){
    try {
       const response = await axios.post('http://localhost:5000/users', person);
       return response;
    }
    catch (error) {
       console.log(error);
       return false;
    }
  }
  
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
  
  function addAccount(person) {
    makeAccountPostCall(person).then( result => {
      if (result && result.status === 201)
        console.log('Success!');
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
  
  function checkCredentials(person) {
    makeLoginPostCall(person).then( result => {
      if (result && result.status === 200)
        console.log('Success!');
      else
        console.log('Failure.');
    });  
  }

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/users/Login" element={<Login handleSubmit={checkCredentials}/>} />
      <Route path="/users/signup" element={<Signup handleSubmit={addAccount}/>} />
    </Routes>
  );
}
