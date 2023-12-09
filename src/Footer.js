import React from "react";
import "./Footer.css";

export default function Footer(){
    return(
        <section className="Footer">
            <div className="footerdata">
                <div className="footer-1">
                    <h1 style={{color: "white"}}> EDUPLANNER </h1>  <br/>
                    <p style={{marginLeft: "-40%"}}>Limitless Learning with Eduplanner</p>
                    <a href="https://www.linkedin.com/company/anarghyacommunications/"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"/></a>
                    <a href="https://x.com/anarghya_c?t=Ur6EeLF2PhABmoAwJnAgXw&s=09">
                        <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61550951593962&mibextid=ZbWKwL"><img src="https://cdn-icons-png.flaticon.com/512/2504/2504792.png" alt="" /></a>
                    <table class="data">
                    <tr>
                        <td> Email : </td>
                        <td> mailto:contactus@anarghyacomm.in </td>
                    </tr> 

                    <tr>
                        <td> Phone :  </td>
                        <td> +91-040-6793 2204 </td>
                    </tr> 

                    <tr>
                        <td> Address :</td>
                        <td> 
                            1212&1215A, 3rd Fllor, Regus SL Jubilee,Rd No.36, <br/>
                            Jubilee Hills, Hyderabad, Telangana-500033
                        </td>
                    </tr>
                </table>
                </div>

                <div className="footer-2"> <br/>
                    <h1 style={{color: "white"}}> Company </h1>  <br/>
                    <h5> Home </h5>
                    <h5> Courses </h5>
                    <h5> Aboutus </h5>
                    <h5> Login </h5>
                    <h5> Contatus </h5>
                </div>

                <div className="footer-3">  <br/>
                    <h1 style={{color: "white"}}> Support </h1>  <br/>
                    <h5> 24h Services </h5>
                    <h5> Quick Chart </h5>
                    <h5> Help </h5>
                    <h5> Any Query </h5>
                </div>


            </div>  <br/>
            <div className="rights">
            <h2 style={{fontSize: "1.3rem", color: "white", marginTop: "5%", marginLeft: "30%"}}>© 2023 - EDUPLANNER, All Rights Reserved</h2>
            </div>
        </section>
    )
}