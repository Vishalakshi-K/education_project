import React from "react";
import './Login.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {Link} from 'react-router-dom';
import Menubar from "./Menubar.js";


export default function Login(){
    return(       
        <> 
        <Menubar></Menubar>
            <div className="logins">
             <h1 style={{marginLeft: "47%"}}>Login</h1>          
            <div className="loginscontainer d-flex flex-row justify-content-center">
                <div className="m-3">
                    <Link to="/Studentlogin"><img height={'200px'} src='loginimage.jpg'/></Link>
                    <p>Student Login</p>
                </div>
                <div className="m-3">
                    <Link to="/Employeelogin"><img height={'200px'} src='loginimage.jpg'/></Link>
                    <p>Employer Login</p>
                </div>
            </div>
            <p>If you don't have an account please <Link to="/Signup"><button className="btn btn-primary">Register</button></Link></p><br></br>
            <p>(OR)</p>
            <p>continue with google<a href='https://www.google.com/account/about/'><img height={"50px"} src="googlesignup.png"/></a></p>
            </div>
        </>
    );
}