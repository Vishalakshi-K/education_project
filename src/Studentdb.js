import React from 'react';
import {
    FaRegChartBar,
    FaShoppingBag,
    FaTh,
    FaThList,
    FaUserAlt
} from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';


const Studentdb = ({children}) => {
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"My Courses",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"My Grades",
            icon:<FaRegChartBar/>
        },
        {
            path:"/product",
            name:"Settings",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container" style={{backgroundColor: "white"}}>
           <div style={{width: "200px" }} className="sidebar">
               <div className="top_section">
                <div>
                    <Link to="./Profile"><h1 className="logo">Pro</h1></Link>
                </div>
                   <div style={{marginLeft: "50px" }} className="bars">
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: "block" }} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
           <Dashboard></Dashboard>
        </div>
    );
};

export default Studentdb;