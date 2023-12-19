import React from "react";
import { Link } from "react-router-dom";
import Calender from "./Calender";
import "./Dashboard.css";
import Studentdb from "./Studentdb";

export default function Dashboard(){
    return(
        <>
        <Studentdb></Studentdb>
        <div style={{display: "flex"}}>
        <div>
            <div className="purchased-course" style={{marginLeft: "100%", marginTop: "5%"}}>
                <h4> Number of Purchased Courses -> 1 </h4>
            </div>
            <h2 style={{marginLeft: "100%", marginRight: "-150%"}}>Courses List</h2>
            <Link to="/HTML"><div className="purchased-course-html">
                <h1>.</h1>
            </div></Link>
        </div>
        <div style={{display: "flex", marginLeft:"40%", marginTop: "5%", cursor: "pointer"}}>
            <div>
            <h1 style={{marginLeft: "0%"}}>Trainer Assigned</h1>
                <img style={{width: "10%", borderRadius: "10px"}}
                src="https://us.123rf.com/450wm/rawpixel/rawpixel1706/rawpixel170665671/81149306-young-woman-smiling-studio-photo.jpg?ver=6" alt=""/>
            </div>
            <div style={{marginLeft: "-69%", marginTop: "10%"}}>
            <Link to="/Viewprofile"><h1>Sushma</h1></Link>
            </div>
        </div>
        </div>
        <Calender></Calender>
        </>
    )
}