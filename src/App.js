import React from "react";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Courses from "./Courses";
import Profile from "./Profile";
import Contactus from "./Contactus";
import Preschool from "./Preschool";
import Fullstackcourse from "./Fullstackcourse";
import Studentlogin from "./Studentlogin";
import Employeelogin from "./Employeelogin"
import Forgotpassword from "./Forgotpassword";
import Aboutus from "./Aboutus";
import Employerhome from "./Employerhome";
import Studentprofile from "./Studentprofile";
import Jobposting from "./Jobposting";
import AskQuery from "./AskQuery";
import Jobposts from "./Jobposts";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Payment from "./Payment";
import Quiz from "./Quiz";
import CourseVideos from "./CourseVideos";
import Coursepage from "./Coursepage";
import Coursesidebar from "./Coursesidebar";
import Coursemenu from "./Coursemenu";
import Frequent from "./Frequent";
import Coursepage2 from "./Coursepage2";
import Payment2 from "./Payment2";
import Calender from "./Calender";
import Dashboard from "./Dashboard";
import Studentdb from "./Studentdb";
export default function App(){
    return(
        <BrowserRouter>
            
        <Routes>
                    <Route path='/Courses' element={<Courses/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Courses/Studentdb' element={<Studentdb/>}/>
                    <Route path='/Calender' element={<Calender/>}/>
                    <Route path='/Dashboard' element={<Dashboard/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Signup' element={<Signup/>}/>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Contactus' element={<Contactus/>}/>
                    <Route path="/preschool" element={<Preschool/>}/>
                    <Route path="Fullstackcourse" element={<Fullstackcourse/>}/>
                    <Route path="/Studentlogin" element={<Studentlogin/>}/>
                    <Route path="/Employeelogin" element={<Employeelogin/>}/>
                    <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
                    <Route path="/Aboutus" element={<Aboutus/>}/>
                    <Route path="/Employerhome" element={<Employerhome/>}/>
                    <Route path="/Studentprofile" element={<Studentprofile/>}/>
                    <Route path="/Jobposting" element={<Jobposting/>}/>
                    <Route path="/AskQuery" element={<AskQuery/>}/>   
                    <Route path="/Jobposts" element={<Jobposts/>}/>
                    <Route path="/Courses/Payment" element={<Payment/>}/>
                    <Route path="/Quiz" element={<Quiz/>}/>
                    <Route path="/Frequent" element={<Frequent/>}/>
                    <Route path="/Courses/coursepage" element={<Coursepage/>}/>
                    <Route path="/CourseVideos" element={<CourseVideos/>}/>
                    <Route path="/Coursesidebar" element={<Coursesidebar/>}/>
                    <Route path="/coursemenu" element={<Coursemenu/>}/>
                    <Route path="/Payment2" element={<Payment2/>}/>
                    <Route path="/Coursepage2" element={<Coursepage2/>}/>

    </Routes>
        </BrowserRouter>
    
    );
}