import React from "react";
import './Fullstackcourse.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { Link } from "react-router-dom";


export default function Fullstackcourse(){
    
    return(
        <>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#fullstackVedios">Vedios</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Assessment</a>
                        </li>
                        <li class="nav-item">
                        <Link to="/AskQuery"><a class="nav-link" href="#">Ask a Query</a></Link>
                        </li>
                       
                    </ul>
                    </div>
                </div>
                </nav>
        <div className="d-flex flex-row m-3 description">
            <div>
                    <p style={{fontSize:'50px',textDecoration:'underline'}}>Full Stack Developent Course.</p>
                    <p>A complete tutorial on fullstack development.</p>
                    <p>Prepare for a career as a front-end developer. Gain the in-demand skills and hands-on experience to get job-ready in less than 3 months. No prior experience required.</p>
                    <p>Taught in English</p>
                    <a href="#">Instructers</a>
            </div>
            <div>
                <img style={{height:"250px",width:"500px",margin:"10px"}} src="fullstackcourse.png"/>
            </div>
        </div>
        <br/><br/>
        <p style={{fontSize:"30px",fontWeight:"bold"}}>What you'll Learn.</p>
        <div className="d-flex flex-row justify-content-between gainskills p-3 m-3">
            <div>
            <ol style={{listStyleType:"disc"}}>
                <li>Master the most up-to-date practical skills and tools that front-end developers use in their daily roles</li>
                <li>Learn how to develop web pages using programming languages like HTML, CSS,  JavaScript, and React</li>
            </ol>
            </div>
            <div>
            <ol style={{listStyleType:"disc"}}>
                <li>Apply user interface and user experience (UI/UX) principles and best practices; manage your code with GitHub repositories and branches</li>
                <li>Gain technical experience through hands-on labs and projects and build a portfolio to showcase your work to potential employers</li>
            </ol>
            </div>
        </div>
        <p style={{fontSize:"25px",fontWeight:"bold",textDecoration:"underline",}}><center>Skills You'll Gain.</center></p>
        <div className="skillslearn">
        <div className="d-flex flex-row p-2">      
            <button>Html</button>
            <button>CSS</button>
            <button>Bootstrap</button>
            <button>Java script</button> 
        </div>
        <div className="d-flex flex-row p-2">
            <button>React JS</button>
            <button>SQL</button>
            <button>Angular</button>
        </div>
        </div>
        <h1>
            Full stack related vedios
        </h1>
        <div>
        <div id="fullstackVedios" className="d-flex flex-row justify-content-between m-3">
        <iframe width="300" height="300" src="https://www.youtube.com/embed/HcOc7P5BMi4" title="HTML Tutorial for Beginners | Complete HTML with Notes &amp; Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="300" height="300" src="https://www.youtube.com/embed/ESnrn1kAD4E" title="CSS Tutorial for Beginners | Complete CSS with Project, Notes &amp; Code" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="300" height="300" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="Learn JavaScript - Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="300" height="300" src="https://www.youtube.com/embed/SqcY0GlETPk" title="React Tutorial for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>    
        </div>

      <br></br>
        <p style={{fontSize:'25px',fontWeight:'bold',textDecoration:"underline"}}>Other Related Courses</p><br/>
        
        <div className="d-flex flex-row justify-content-equal othercourses"> 
            <div className="card">
            <img src="html.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Full Course on HTMl</h5>
                <p className="card-text">Some quick example text to bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View course</a>
            </div>
            </div>
            <div className="card">
            <img src="html.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Full Course on HTMl</h5>
                <p className="card-text">Some quick example text to  bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View course</a>
            </div>
            </div>
            <div className="card">
            <img src="react.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Beginer Course on React</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View course</a>
            </div>
            </div>
            <div className="card">
            <img src="sqlcourse.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Full course on Sql</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View course</a>
            </div>
            </div>
            <div className="card">
            <img src="sqlcourse.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Full course on Sql</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View course</a>
            </div>
            </div>
        </div>
        
        </>
        
    );
}