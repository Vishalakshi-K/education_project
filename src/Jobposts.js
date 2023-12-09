import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Jobposts() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
  </div>
  const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <>
    

    <h1 style={{marginTop: "-3%", marginLeft: "40%", fontSize: "2.5rem"}}>Profiles of Our Students</h1>
    <div>
            <nav className="sidebar" style={{marginTop: "-9%"}}>
                <div className="scrollbox">
                    <div className="scrollbox-inner">
                        <p>Full Stack Java</p>
                        <p>Python</p>
                        <p>Devops</p>
                        <p>Front End Developers</p>
                        <p>Back End Developers</p>
                        <p>Cloud Computing</p>
                        <p>Testing</p>
                        <p>AI</p>
                        <p>Auto Cad</p>
                        <p>Automation</p>
                        <p>Research & Development</p>
                        <p>Robotics</p>
                        <p>Troubleshooting</p>
                        <p>Raspberry Pi</p>
                        <p>Computer Architecture</p>
                        <p>PCB Design</p>
                        <p>Arduino</p>
                        <p>Cyber Security</p>
                        <p>Mobile App Development</p>
                        <p>UI/UX Development</p>
                        <p>Data Analytics</p>
                        <p>Database Administration</p>
                        <p>Finace & Accounting</p>
                        <p>HR</p>
                        <p>Business Development</p>
                        <p>Architect</p>
                        <p>Graphics Designer</p>
                        <p>Web Designer</p>
                    </div>
                </div>
            </nav>
        </div>












    <CardGroup style={{display: "flex", marginLeft: "25%"}}>
      <Card>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/72c0b2_9417bad731e543578911f6110f4e9a2d~mv2.jpg/v1/fill/w_640,h_330,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/72c0b2_9417bad731e543578911f6110f4e9a2d~mv2.jpg" 
        style={{width: "80%", height: "40vh", borderRadius: "2rem"}}/>
        <Card.Body>
          <Card.Text style={{marginLeft: "-30%"}}>
            Domain : Full Stack Java
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "17%"}}>View Profile</button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://cdn.dribbble.com/users/3333696/screenshots/16895929/media/b8f25c7ce40ff9003888cee6c8a41183.jpg?resize=400x0" 
        style={{width: "80%", height: "40vh", marginLeft: "-10%", borderRadius: "2rem"}}/>
        <Card.Body>
          <Card.Text style={{marginLeft: "-25%"}}>
            Domain : Finance
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button style={{width: "35%", marginLeft: "20%"}}>View Profile</button>
        </Card.Footer>
      </Card>
      <Card style={{marginLeft: "-10%"}}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY43MGPXszgseBLubLT_1Yr2j7SA3fGTS1IO7B13bTNAu6-S7FEQnd7RVvOX8IXhmN660&usqp=CAU" 
        style={{width: "83%", height: "40vh", marginLeft: "5%",  borderRadius: "2rem"}}/>
        <Card.Body>
          <Card.Text style={{marginLeft: "-15%"}}>
            Domain : Python
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "25%"}}>View Profile</button>
        </Card.Footer>
      </Card>
    </CardGroup>

        <br/> <br/>

        <CardGroup style={{display: "flex", marginLeft: "25%"}}>
        <Card>
        <Card.Img variant="top" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2660/posts/32707/image/fox-tech-colorful-logo-YE29W9Q.jpg" 
        style={{width: "80%", height: "40vh", borderRadius: "2rem"}}/>
        <Card.Body>
            <Card.Text style={{marginLeft: "-30%"}}>
            Domain : Full Stack Java
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "17%"}}>View Profile</button>
        </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/10026541/file/original-afd4375fa6b872bb39066a6f570e9ce4.jpg?resize=400x300&vertical=center" 
        style={{width: "80%", height: "40vh", marginLeft: "-10%", borderRadius: "2rem"}}/>
        <Card.Body>
            <Card.Text style={{marginLeft: "-25%"}}>
            Domain : Finance
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button style={{width: "35%", marginLeft: "20%"}}>View Profile</button>
        </Card.Footer>
        </Card>
        <Card style={{marginLeft: "-10%"}}>
        <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce483d129377123.61698404ea7c9.jpg" 
        style={{width: "83%", height: "40vh", marginLeft: "5%",  borderRadius: "2rem"}}/>
        <Card.Body>
            <Card.Text style={{marginLeft: "-15%"}}>
           Domain : Python
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "25%"}}>View Profile</button>
        </Card.Footer>
        </Card>
        </CardGroup>
        <br/> <br/>
  
        <div className="App" style={{marginTop: "0%", cursor: "pointer"}}>
          <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
          {readMore && extraContent}
        </div>
        
</>
  );
}