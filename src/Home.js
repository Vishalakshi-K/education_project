import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Menubar from './Menubar'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        
        <Menubar></Menubar>
        <div className="image">
            <img className='image1' src="https://source.unsplash.com/1600x1000/?education" alt="" /> <br /><br />
        </div>

        
        <div className='youtube'>
       <iframe width="580" height="500" src="https://www.youtube.com/embed/dh7P7p4fsy8" title="Intellipaat Job Assistance Reviews | Intellipaat Placement Reviews | Intellipaat Career Transition" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe width="580" height="500" src="https://www.youtube.com/embed/UkWIeRRQQNY" title="Intellipaat Reviews | Fresher To Cloud and DevOps Career Transitions | Best Cloud Computing Course" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div> <br /><br />

        <div className="content">
           <h1>Our programs focus on developing the entire education technology and innovation sector.</h1>
        </div>
        <div className='content1' >
            <p className='subcontent'>
            Anarghya Educom is India’s education technology and innovation industry hub. <br /> Through connection and collaboration, we accelerate India’s <br /> EdTech ecosystem globally. <br /><br />
            We connect a community of education providers, industry <br /> participants and EdTech entrepreneurs committed to reimagining <br /> learning in the digital age.
            </p> <br /><br />

            <p className='subcontent1'>
            As education transitions to borderless digital delivery, our diverse <br /> ecosystem will impact the future of learning globally from India. <br /><br />
            We have a range of services supporting EdTech companies at each <br /> stage of their journey, whilst also connecting education providers and <br /> industry participants into the broader ecosystem.
            </p>
        </div>
        <div className="rahul">
            <img src="image1.jpg" alt="" className="rahul1" />
            <img src="image12.webp" alt="" className="rahul1" />
            <img src="image3.jpg" alt="" className="rahul1" />
        </div> <br />

        <div className="rahul2">
            <p>
            <h1> High quality educational content. </h1> <br />
            <p>Our online courses and assessments are localized in 10+ languages <br /> and developed in-house by learning
             experts and therefore always <br /> unique. Quality is thus guaranteed!</p>
            </p> 
            <img src="sideimage1.jpg" alt="" className="sideimage" />
        </div> <br />

        <div className="rahul2">
            <img src="sideimage2.jpg" alt="" className="sideimage" />
            <p>
                <h1>Easily integrated into your LMS.</h1><br />
                <p>LMS integration is a breeze for us! We integrate with almost every <br /> Learning Management System out there, ranging from LTI, SSO or <br /> Remote SCORM.</p>

            </p>
        </div> <br />

        <div className="rahul2">
            <p>
                <h1>One fixed price for unlimited access.</h1><br />
                <p>We have one fixed price, which gives every single person in your <br /> organization unlimited access to our full library. No hidden fees! After <br /> all, just like you, we want all your employees to make learning a good <br /> habit.</p>
            </p>
            <img src="sideimage3.jpg" alt="" className="sideimage" />
        </div> <br /><br /> <br />

       <div className="review">
        <h1 style={{fontSize: "1.8rem"}}> India's most awarded  ONLINE EDUCATION  platform </h1>
       </div> <br />

       <div className='awardscontent'>
       <div className="awards">
        <img src="award.jpg" alt="" className="award1" />
        <p className='best1'>
           <h3> Best Tech in Education </h3> 
           <span>India digital wards 2022</span>
        </p>
        </div>
        <div className="awards">
        <img src="award.jpg" alt="" className="award1" />
        <p className='best1'>
           <h3> Top 50 Growth Companies </h3> 
           <span>Global EdTech 2022</span>
        </p>
        </div>
        <div className="awards">
        <img src="award.jpg" alt="" className="award1" />
        <p className='best1'>
           <h3> Best in industry </h3> 
           <span>Mobility wards 2022</span>
        </p>
        </div>
       </div>

       <div className='benifits123'>
        <img src="benifits.jpg" alt=""  className='benifits1'/>
        <div className="matter123">
            <p>Join now</p>
            <h1>
                Discover the Member benifits
            </h1>
            <p>
            Membership provides a range of benefitsconnected to your personal, professinal and organisational goals
            </p>
        </div>
       </div> 
        <br/>
       <div className="rogramme">
        <h1 style={{marginLeft: "40%"}}>Top Courses</h1>
       </div> <br />
       <div className='cards'>
       <div className='programme'>
            <img src="full stack.png" alt="" className="fullstack" />
            <h1 style={{fontSize: "1.5rem"}}>Advance certification in Full stack</h1>
        </div>

        <div className='programme'>
            <img src="devos.jpeg" alt="" className="fullstack" />
            <h1 style={{fontSize: "1.5rem"}}>Advance certification in Devops Cloud </h1>
        </div>

        <div className='programme'>
            <img src="python.png" alt="" className="fullstack" />
            <h1 style={{fontSize: "1.5rem"}}>Advance certification in Python</h1>
        </div>

        <div className='programme'>
            <img src="testing.jpeg" alt="" className="fullstack" />
            <h1 style={{fontSize: "1.5rem"}}>Advance certification in Testing</h1>
        </div>

       </div> <br /><br />
       <Footer></Footer>
    </div>
  )
}

export default Home