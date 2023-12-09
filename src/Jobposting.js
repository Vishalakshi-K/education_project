import React from "react";
import './Jobpostin.css'
import { useState } from "react";
import axios from "axios";

export default function Jobposting(){
    const[CompanyName,setCompanyName]=useState('');
    const[Role,setRole]=useState('');
    const[ExperienceRequired,setExperienceRequired]=useState('');
    const[Skillsrequired,setSkillsrequired]=useState('');
    const[Responsibilities,setResponsibilities]=useState('');
    const[ContactEmail,setContactEmail]=useState('');
    const[Contactnumber,setContactnumber]=useState('');
    const[YourName,setYourName]=useState('');


    const onsubmit=async()=>{
    
    const data={
       CompanyName,
       Role,
       ExperienceRequired,
       Skillsrequired,
       Responsibilities,
       ContactEmail,
       Contactnumber,
       YourName,
      }
      try{
        const response= await axios.post("http://localhost:8087/api/education",data);
        setCompanyName('');
        setRole('');
        setExperienceRequired('');
        setSkillsrequired('');
        setResponsibilities('');
        setContactEmail('');
        setContactnumber('');
        setYourName('');
        alert("registration successful")
    }
    catch{
      console.log("error occured");
  }
    return(
    <>

    <h1>Post a Job</h1>
        <div className="Jobpost d-flex flex-row justify-content-center">

            <div className="Jobdemo">
                <div className="Jobheading">
                <h1>Watch Demo</h1>
                <p>Learn how to create a perfect job posting</p>
                </div>
                <button>watch demo</button>
            </div>
            
            <table>
                <tr>
                    <td>Company Name:</td>
                    <td><input type="text" id="CompanyName" value={CompanyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Enter your company name"></input></td>
                </tr>
                <tr>
                    <td>Role:</td>
                    <td><input type="text" id="Role" value={Role} onChange={(e)=>setRole(e.target.value)} placeholder="Job role"></input></td>
                </tr>
                <tr>
                    <td>Experienced Required:</td>
                    <td><input type="number" id="ExperienceRequired" value={ExperienceRequired} onChange={(e)=>setExperienceRequired(e.target.value)} placeholder="Experienced required"></input></td>
                </tr>
                <tr>
                    <td>Skills required:</td>
                    <td><input type="text" id="Skillsrequired" value={Skillsrequired} onChange={(e)=>setSkillsrequired(e.target.value)} placeholder="skills"></input></td>
                </tr>
                <tr>
                    <td>Responsibilities:</td>
                    <td><input type="text" id="Responsibilities" value={Responsibilities} onChange={(e)=>setResponsibilities(e.target.value)} placeholder="Responsibilities"></input></td>
                </tr>
                <tr>
                    <td>Contact Email:</td>
                    <td><input type="email" id="ContactEmail" value={ContactEmail} onChange={(e)=>setContactEmail(e.target.value)} placeholder="company email"></input></td>
                </tr>
                <tr>
                    <td>Contact number:</td>
                    <td><input type="number" id="ContactNumber" value={Contactnumber} onChange={(e)=>setContactnumber(e.target.value)} placeholder="contact number"></input></td>
                </tr>
                <tr>
                    <td>Your Name:</td>
                    <td><input type="text" id="YourName" value={YourName} onChange={(e)=>setYourName(e.target.value)} placeholder="Enter your name"></input></td>
                </tr>
                <tr><button onClick={onsubmit}>submit</button></tr>
            </table>
        </div>
    </> 
    );
    }
}