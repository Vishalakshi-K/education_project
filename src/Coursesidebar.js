import React from "react";
import "./Coursesidebar.css";
import Coursemenu from "./Coursemenu";
import Menubar2 from "./Menubar2";

export default function Coursesidebar (){
    return(
        <>
        <Menubar2></Menubar2>
        <br/>
        <br/>
        <br/>
        <Coursemenu/>
        <div>
            <nav className="sidebar">
                <div className="scrollbox">
                    <div className="scrollbox-inner">
                    <p><a href="#html-home">HTML Home </a></p>
                    <p><a href="#html-intro">HTML Introduction </a></p>
                    <p><a href="#html-basic">HTML Basic </a></p>
                        <p>HTML Elements</p>
                        <p>HTML Attributes</p>
                        <p>HTML Headings</p>
                        <p>HTML Paragraphs</p>
                        <p>HTML Styles</p>
                        <p>HTML Formatting</p>
                        <p>HTML Quotations</p>
                        <p>HTML Comments</p>
                        <p>HTML Colors</p>
                        <p>HTML CSS</p>
                        <p>HTML Links</p>
                        <p>HTML Images</p>
                        <p>HTML Videos</p>
                        <p>HTML Audios</p>
                        <p>HTML Tables</p>
                        <p>HTML Lists</p>
                        <p>HTML classes</p>
                        <p>HTML Id </p>
                        <p>HTML Iframes</p>
                        <p>HTML Semantic</p>
                        <p>HTML Symbols</p>
                        <p>HTML Head</p>
                        <p>HTML JavaScript</p>
                        <p>HTML Div</p>
                        <p>HTML Entities </p>
                        <p>HTML Block</p>
                        <p>HTML Inline</p>
                        <p>HTML Charset </p>
                    </div>
                </div>
            </nav>
        </div>









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
                <section style={{marginLeft : "30%", marginTop : "3%"}}>
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
                <section style={{marginLeft : "30%", marginTop : "3%"}}>
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
                <section style={{marginLeft : "30%", marginTop : "3%", marginBottom : "20%"}}>
                <h2 style={{fontSize: "1.5rem"}}>HTML is the standard markup language for Web pages</h2>
                <h2 style={{fontSize: "1.5rem"}}> With HTML you can create your own Website </h2>
                <h2 style={{fontSize: "1.5rem"}}> HTML is easy to learn - You will enjoy it!</h2>
                </section>
            </section>
            </div>
        </main>
        </>
    )
}