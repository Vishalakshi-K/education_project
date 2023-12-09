import React from "react";
import './Blogs'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

export default function Blogs(){
    return(
        <>
        <div className="container">
        <header>
            <label for="language">Our Blogs </label> 
            <select class="data">
                <div name="language" id="language">
                    <option value=""> Select a Programming Language </option>
                    <option href="https://www.facebook.com/login/"> Data Science </option>
                    <option> Full Stack Java </option>
                    <option> Cloud Computing </option>
                    <option> Cyber Security </option>
                    <option> Artificial Intelligence </option>
                    <option> Machine Learning </option>
                    <option> Robotics and Software Engineering </option>
                    <option> UX Design </option>
                    <option> Data Analytics </option>
                    <option> Python </option>
                </div>
            </select>
        </header>
        <div>
            <div>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="C:\Balaram\myapp\public\fullstack.jpeg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="C:\Balaram\myapp\public\python.png" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="C:\Balaram\myapp\public\AI.jpeg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>
            </div>
            <div className=" cards d-flex flex-row justify-content-between">
                    <div class="card">
                    <img src="C:\Balaram\myapp\public\fullstack.jpeg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    <div class="card">
                    <img src="C:\Balaram\myapp\public\python.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    <div class="card">
                    <img src="C:\Balaram\myapp\public\AI.jpeg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
                    <div class="card">
                    <img src="C:\Balaram\myapp\public\AI.jpeg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>

            </div>
        </div>        
</>


    );
}