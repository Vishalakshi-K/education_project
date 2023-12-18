import React from "react";
import { Link } from "react-router-dom";
import Menubar2 from "./Menubar2";
import "./Coursepage.css";

export default function Coursepage(){
    return(
        <>
        
        <Menubar2></Menubar2>
        <div className="course-sel">
        <div className="course-list">
        <ul>
            <Link to="/Coursesidebar"><li>Material</li></Link>
            <Link to="/CourseVideos"><li>Videos</li></Link>
            <Link to="/Quiz"><li>Assessment</li></Link>
            <Link to="/Frequent"><li>FAQ's</li></Link>
        </ul>
        </div>
        </div>
        </>
    )
}