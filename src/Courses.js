import React from "react";
import './Courses.css'
import Menubar2 from "./Menubar2.js";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { BrowserRouter, Link } from "react-router-dom";
import Footer from "./Footer.js";
import Payment from "./Payment.js";

export default function Courses() {
    return (
        <>
            <Menubar2 />
            <div style={{ padding: "30px" }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn">Design</button>
                                        <div className="dropdown-content">
                                            <a href="#">Architecture</a>
                                            <a href="#">design for health care</a>
                                            <a href="#">design for sustainability</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn">IT and Software</button>
                                        <div className="dropdown-content">
                                            <a href="#">AI</a>
                                            <Link to="Payment"><a href="#">Web development</a></Link>
                                            <a href="#">Cloud</a>
                                            <a href="#">Machine Learning</a>
                                            <a href="#">Web development</a>

                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="dropbtn">school</button>
                                            <div className="dropdown-content">
                                                <a href="#">Primary School</a>
                                                <a href="#">Secondary School</a>
                                                <a href="#">Advanced concepts</a>
                                            </div>
                                        </div>
                                    
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn">Finance</button>
                                        <div className="dropdown-content">
                                            <a href="#">Personal Finance</a>
                                            <a href="#">Public Finance</a>
                                            <a href="#">Private Finance</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn">Marketing</button>
                                        <div className="dropdown-content">
                                            <a href="#">E Marketing</a>
                                            <a href="#">Real Estate Marketing</a>
                                            <a href="#">Digital Marketing</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown">
                                        <button className="dropbtn">Business</button>
                                        <div className="dropdown-content">
                                            <a href="#">MBA</a>
                                            <a href="#">Agri Business</a>
                                            <a href="#">Construction Business</a>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ paddingLeft: "400px" }}>
                                    <div className="dropdown">
                                        <Link to={"/Jobposts"}><button className="dropbtn">JOB POSTS</button></Link>

                                    </div>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Link to="/Fullstackcourse"><img src="fullstackcourse.png" className="d-block w-100 cimage" alt="..." /></Link>
                        </div>
                        <div className="carousel-item">
                            <img src="aws.png" className="d-block w-100 cimage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="bootstrap.jpeg" className="d-block w-100 cimage" alt="..." />
                        </div>
                    </div>
                </div>

                <div style={{ margin: "30px", borderRadius: "20px", }}>
                    <h1 style={{ textAlign: "center" }}>
                        Expand you career oppurtunities by upskilling yourself.
                    </h1>
                    <p>Take one of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to</p>
                </div>

                <div className="d-flex flex-row justify-content-equal cardsR">
                    <div className="card">
                        <img src="c lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">C Language</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/Payment2"><a href="#" className="btn btn-primary">View Course</a></Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src="nodejs.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn Nodejs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn PHP</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn PHP</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-equal cardsR">
                    <div className="card">
                        <img src="c lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">C Language</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="nodejs.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn Nodejs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn PHP</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn PHP</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-equal cardsR">
                    <div className="card">
                       <img src="c lang.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">C Language</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="nodejs.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn Nodejs</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn PHP</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Learn PHP</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                </div>
                <br />
                <p style={{ float: "left" }}>Explore Online Degrees and certifications</p>
                
                <div>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner CCC" style={{height:"100px",backgroundColor:"black",color:"white"}}>
                            <div className="carousel-item active">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-row" style={{padding:"30px"}}>
                                    <a href="https://www.ibm.com/training/free"><img src="ibmlogo.png"  alt="..." /></a>
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                    <div className="d-flex flex-row " style={{padding:"30px"}}>
                                    <a href="https://grow.google/intl/en_in/certificates/"><img src="googlelogo.png" alt="..." /></a>
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                    <a href="https://techcommunity.microsoft.com/t5/educator-developer-blog/free-microsoft-fundamentals-certifications-for-worldwide/ba-p/3734654"><img src="microsoftlogo.jpg" alt="..." /></a>
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                        <img src="ibmlogo.png" className="d-block w-100" alt="..." />
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                        <img src="googlelogo.png" className="d-block w-100" alt="..." />
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                        <img src="microsoftlogo.jpg" className="d-block w-100" alt="..." />
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                        <img src="ibmlogo.png" className="d-block w-100" alt="..." />
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                        <img src="googlelogo.png" className="d-block w-100" alt="..." />
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                    <div className="d-flex flex-row"  style={{padding:"30px"}}>
                                        <img src="microsoftlogo.jpg" className="d-block w-100" alt="..." />
                                        <p>IBM cybersecurity analyst</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}