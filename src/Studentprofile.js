import React from "react";
import './Studentprofile.css'


export default function Studentprofile(){
    return(
        <>
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid d-flex flex-row justify-content-center">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

       
      <div className="d-flex flex-row">
            <div>
            <div>
            <nav className="sidebar">
                <div className="scrollbox">
                    <div className="scrollbox-inner">
                   
                        <p>Computer science</p>
                        <p>Mechanical</p>
                        <p>Business</p>
                        <p>Graphics</p>
                        <p>Analyst</p>
                        <p>Developer</p>
                        <p>Chemical engineering</p>
                        <p>Petro chemical</p>
                        <p>Cybersecurity</p>
                        <p>Cloud computing</p>
                        <p>Salesforce</p>
                        <p>SAP</p>
                        <p>IOT</p>
                        <p>Materialurgical engineering</p>
                        <p>Project management</p>
                        <p>Business analyst</p>
                        <p>Architect</p>
                        <p>Content writing</p>
                    </div>
                </div>
            </nav>
        </div>
        </div>


        <div style={{marginLeft:"200px"}}>
        <main className="content-scroll">
        <div id="html-home">
            <section >
                    <h1 style={{marginLeft : "32%", marginTop: "5%", fontSize: "40px"}}>
                        <br/>   Welcome to HTML Tutorial</h1>
                <div className="home-btns">
                    <div className="home-btn-1">
                        <button style={{width : "130%"}}>
                            home
                        </button>
                    </div>
                    <div className="home-btn-2">
                        <button style={{width : "130%"}}>
                            next
                        </button>
                    </div>
                </div>
                <section style={{marginLeft : "10%", marginTop : "3%"}}>
                <h2 style={{fontSize: "1.5rem"}}>HTML is the standard markup language for Web pages</h2>
                <h2 style={{fontSize: "1.5rem"}}> With HTML you can create your own Website </h2>
                <h2 style={{fontSize: "1.5rem"}}> HTML is easy to learn - You will enjoy it!</h2>
                </section>
                <div className="home-studybtns">
                    <div className="home-studybtn-1">
                        <button style={{width : "20%"}}>
                            Study our Free HTML tutorial--
                        </button>
                    </div>
                    <br/>
                    <div className="home-studybtn-2">
                        <button style={{width : "20%"}}>
                         Watch our Video Tutorial--
                        </button>
                    </div>
                </div>
            </section>
            </div>


            <div id="html-intro">
            <section>
                    <h1 style={{marginLeft : "32%", marginTop: "40%", fontSize: "40px"}}>                    
                    <br/> <br/> <br/>Welcome to HTML Intro</h1>
                <div className="home-btns">
                    <div className="home-btn-1">
                        <button style={{width : "130%"}}>
                            home
                        </button>
                    </div>
                    <div className="home-btn-2">
                        <button style={{width : "130%"}}>
                            next
                        </button>
                    </div>
                </div>
                <section style={{marginLeft : "10%", marginTop : "3%"}}>
                <h2 style={{fontSize: "1.5rem"}}>HTML is the standard markup language for Web pages</h2>
                <h2 style={{fontSize: "1.5rem"}}> With HTML you can create your own Website </h2>
                <h2 style={{fontSize: "1.5rem"}}> HTML is easy to learn - You will enjoy it!</h2>
                </section>
            </section>
            </div>


            <div id="html-basic">
            <section>
                    <h1 style={{marginLeft : "32%", marginTop: "20%", fontSize: "40px"}}>
                    <br/> <br/> <br/>Welcome to HTML Basics</h1>
                <div className="home-btns">
                    <div className="home-btn-1">
                        <button style={{width : "130%"}}>
                            home
                        </button>
                    </div>
                    <div className="home-btn-2">
                        <button style={{width : "130%"}}>
                            next
                        </button>
                    </div>
                </div>
                <section style={{marginLeft : "10%", marginTop : "3%", marginBottom : "20%"}}>
                <h2 style={{fontSize: "1.5rem"}}>HTML is the standard markup language for Web pages</h2>
                <h2 style={{fontSize: "1.5rem"}}> With HTML you can create your own Website </h2>
                <h2 style={{fontSize: "1.5rem"}}> HTML is easy to learn - You will enjoy it!</h2>
                </section>
            </section>
            </div>
        </main>
        </div>
        </div>

      </>

    );

}