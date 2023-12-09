import React from "react";
import { Link } from "react-router-dom";
import "./Courseafterpay.css";
import coursewelcome from "./Videos/coursewelcome.mp4";

export default function Courseafterpay(){
    return(
        <>
        <div className="home" id="home" style={{marginTop: "-10%"}}>
                <video autoPlay loop muted>
                    <source src={coursewelcome} type="video/mp4"/>
                </video>
        <div className="content"> 
                <nav className="html-content">
                <ul>
                    <Link to="/Coursesidebar"><li>Material</li></Link>
                    <li>Videos</li>
                    <Link to="/Quiz"><li>Assessment</li></Link>
                    <Link to="/Faq"><li>FAQ's</li></Link>
                </ul>
                </nav>
            <h1 className="left"> <br/> Get our Online Courses </h1> <br/> <br/> <br/>
            <h1 className="right"> Anytime Anywhere </h1> <br/> <br/>
            <h3>(Limitless Learning with Eduplanner)</h3>
        </div>
        </div>
        </>
    )
}