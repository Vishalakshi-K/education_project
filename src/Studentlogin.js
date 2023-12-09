import React from "react";
import './Studentlogin.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Menubar from "./Menubar.js";

export default function Login() {

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate('');


  const LoginForm = async () => {
   

    const data={
        email,
        password,
    }
      try {
      setError(false);
      const digits = /[0-9]/;
      const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      const emailSpecialChars = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
      const checkLowerCase = /^[a-z]/;
      
    

      if (digits.test(userName) || specialChars.test(userName))
        throw new Error("sorry only [a-z] characters are allowed for userName");

      if (emailSpecialChars.test(email) || email.includes(" ") || digits.test(email[0]) || !email.endsWith("gmail.com"))
        throw new Error("sorry only [a-z], numbers [0-9],and special characters [. @] are allowed for emailId");
        try{
            const response =  await axios.post("http://localhost:8080/api/login", data);
    
            setEmail('');
            setPassword('')
            if (response.data==="login success"){
                navigate('/courses')
            }
        }
        catch{
            console.log("error occured",error);
        }
     
      } catch (e) {
      setError(true);
      setErrorMessage(e.message);
    }
  }

  return (
    <>
    <Menubar></Menubar>
      <div className="d-flex flex-row justify-content-center Loginbg">
        <div className="logincontainer">
          <div className="logo">
            <img style={{ height: "50px", Width: "50px", paddingBottom: "5px" }} src="loginlogo.png" alt="img"></img>
          </div>
          <p style={{ textAlign: 'center' }}>Student Login.</p>
          <table>
            <tr><td>E mail</td>
              <td><input type="email" id="email" onChange={(e) => {
                setEmail(e.target.value)
              }} required /></td></tr> <br/>
            <tr><td>Password</td>
              <td><input type="password" id="password" onChange={(e) => {
                setPassword(e.target.value)
              }} required></input></td></tr> <br/>
          </table>

          {error && <p style={{ color: "red" }}>{errorMessage}</p>}
          <button className="btn btn-success" onClick={()=> {LoginForm()}} 
          style={{marginLeft: "40%"}}>Login</button>
          <p>Please Note: By continuing and signing in, you agree to Anarghya's Terms & Conditions and Privacy Policy.</p>
          <p><Link to="/Forgotpassword">Forgot Password</Link></p>
          <p>Don't have an account ? <Link to="/Signup"> signup</Link></p>
        </div>
      </div>
    </>
  );
}