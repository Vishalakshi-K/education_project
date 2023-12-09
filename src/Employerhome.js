import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './Employerhome.css';
import { Link } from "react-router-dom";

export default function Employerhome(){
    return(
        <>
     

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid d-flex flex-row justify-content-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to='/Studentprofile'><a class="nav-link" href="#">Student Profiles</a></Link>
            <Link to='/Jobposting'><a class="nav-link" href="#">Post a Job</a></Link>

            </div>
        </div>
        </div>
        </nav>
        <div className="Ecardbg">
            <p>This is the best E-learning portal where people learn new skills and can get hired on the same platform<br></br>
            We provide our customers the top education available in the market<br></br>
            We make the learners on our platform industry ready</p>
        </div>

        <div className="d-flex flex-row Erow1">
            <div className="Ecard">
                <h1>Recruite Top Performers</h1>
                <br></br>
                <br></br>
                <br></br>
                <p style={{paddingTop:"30px"}}>Here you get access to the top performing persons</p>
                <br></br>
                <br></br>
                <br></br>
                <button>Explore more</button>
            </div>
            <div className="Ecard">
                <h1>Recruite Experienced professionals</h1>
                <br></br>
                <br></br>
                <br></br>
                <p>Checkout the Professional level Learner's</p>
                <br></br>
                <br></br>
                <br></br>
                <button>Explore more</button>
            </div>
            <div className="Ecard">
                <h1>search all catogaries</h1>
                <br></br>
                <br></br>
                <br></br>
                <p style={{paddingTop:"30px"}}>Explore all the learner's on our platform</p>
                <br></br>
                <br></br>
                <br></br>
                <button>Explore more</button>
            </div>
        </div>

        
            <div className="Edemo">
                <h1>Learn About the recruiting process</h1>
                <button className="btn btn-primary">Watch Demo</button>
            </div>
            <br></br>
            <br></br>
            <h1 style={{color:"red"}}>About US</h1>
            <div className="d-flex flex-row justify-content-between Erow2">
                <div className="Ecard">
                    <h1>How we certify learners</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Learn how we certify our customers</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button>Watch Demo</button>
                </div>
                <div className="Ecard">
                    <h1>How we teach differently</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Experience our teaching methods</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button>Watch Demo</button>
                </div>
                <div className="Ecard">
                    <h1>learners Experiences</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>Check out the reviews our customers gave us</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button>Watch Reviews</button>
                </div>
            </div>
        

        </>
    );
}

