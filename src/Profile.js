import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './Profile.css'
import { Link } from "react-router-dom";

export default function Profile(){
    return(
        <>
            <div>
                    <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Profile</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Resume</a>
                            </li>
                            <li class="nav-item">
                            <AnchorLink class="nav-link" href="#Mycourses">My courses</AnchorLink>
                            </li>
                            <li class="nav-item">
                            <AnchorLink class="nav-link" href="#Certifications">Certificaions</AnchorLink>                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
            </div>
            <div>
                    <div className="profilebg d-flex flex-row justify-content-center p-4 m-4">
                        <img src="profileimage.png"/>
                        <div className="ps-5">
                            <table>
                            <tr><td>Name:</td>
                            <td><input type="text" placeholder="Firstname" required/></td>
                            </tr>
                            <tr><td>Surname:</td>
                            <td><input type="text" placeholder="Surname" required/></td></tr>
                            <tr><td>Mobile number:</td>
                            <td><input type="Number" placeholder="Phone number" required/></td></tr>
                            <tr><td>Address:</td>
                            <td><input type="number" placeholder="house.no" required/></td></tr>
                            <tr><td></td><td><input type="text" placeholder="address" required/></td></tr>
                            <tr><td></td><td><input type="text" placeholder="state" required/></td></tr>
                            <button className="btn btn-primary pt-3">update</button>
                            </table>
                        </div>
                    </div>
            </div>
            <div id="Mycourses">
                <h1 style={{textDecoration:'none',color:'silver'}}>My courses</h1>
                <div className="d-flex flex-row">
                        <div class="card" style={{height:'350px',width: "18rem"}}>
                        <img src="fullstack1.jpeg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Full Stack developer</h5>
                            <p>complete course on full stack web development</p>
                            <a href="#" class="btn btn-primary">View course</a>
                        </div>
                        </div>
                        <div class="card" style={{height:'350px',width: "18rem"}}>
                        <img src="python.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Python course</h5>
                            <p>Python course for beginners</p>
                            <a href="#" class="btn btn-primary">View course</a>
                        </div>
                        </div>
                </div>
                <div id="Certificaions" className="certificaions">
                        <h1>Completed Certifications</h1>
                        <ol>
                            <li>Full Stack developer Certificate.</li>
                            <li>Python Course certificate.</li>
                        </ol>
                </div>
            </div>
        </>

    );
}