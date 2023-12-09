import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './Forgotpassword.css'


export default function Forgotpassword(){
    return(
        <>
        <h1>Forgot password</h1>
        <br/>
        <div className="d-flex justify-content-center">
            <table className="forgotpassword">
                <tr>
                    <td>Email : </td>
                    <td><input type='email' required></input></td>
                </tr>
                <tr>
                    <td>Newpassword : </td>
                    <td><input type="password" required></input></td>
                </tr>
                <tr>
                    <td>Confirm password : </td>
                    <td><input type="password" required></input></td>
                </tr>
                <tr><button className="btn btn-primary">Submit</button></tr>
            </table>
        </div>
        <br/>
        </>
    );
}