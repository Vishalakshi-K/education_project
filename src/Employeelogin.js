import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './Employeelogin.css'
import { Link} from "react-router-dom";
import { useState } from "react";
import Menubar from "./Menubar.js";




export default function EmployeeLogin(){

    const[employeeUsername, setemployeeUsername]=useState('');
    const[email, setemail]=useState('');
    const[password, setpassword]=useState('');
    const[errorMessage, setErrorMessage]=useState('');
    const[error, setError]=useState('');

    const employeelogin = ()=>{

    try{
        setError(false);
        const digits=/[0-9]/;
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        const emailspecialChars = /[`!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
        
        if(digits.test(employeeUsername) || specialChars.test(employeeUsername))
        throw new Error("incorrect usernamename");
        if(emailspecialChars.test(email) || email.includes(" ") || digits.test(email))
        throw new Error("incorrect email");
    }
    catch(e){
        setError(true);
        setErrorMessage(e.message);
    }
}

    return(       
        <>            
            <Menubar></Menubar>  
            <div className="d-flex flex-row justify-content-center Loginbg1">
            <div className="logincontainer1">
                <div className="logo1">
                    <img style={{height:"50px",Width:"50px",paddingBottom:"5px"}} src="loginlogo.png" alt="mmmmm"></img>
                </div>
                <p style={{textAlign:'center'}}>Employer Login.</p>
                <table>
                    <tr><td>E mail</td>
                    <td><input type="email" id="email" onchange={(e) => {setemail(e.target.value)}} required/></td></tr>
                    <br/>
                    <tr><td>Password</td>
                    <td><input type="password" id="password" onChange={(e)=>{setpassword(e.target.value)}} required></input></td></tr>
                </table> <br/>
               <Link> <button className="btn btn-success" onClick={employeelogin}
               style={{marginLeft: "40%"}}>Login</button></Link>
                {error && <p style={{color:"red"}}>{errorMessage}</p>}                     
                <p>Please Note: By continuing and signing in, you agree to Anarghya's Terms & Conditions and Privacy Policy.</p>
                <p><Link to="/Employeelogin">Forgot password</Link></p>
                <p>Don't have an account ? <Link to="/Signup"> Signup</Link></p>
             </div>
             </div>
        </>
    );
}