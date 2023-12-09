import React from 'react'
import "./Aboutus.css"
import { Link } from 'react-router-dom'
import Menubar from './Menubar'
import Footer from './Footer'

const Aboutus = () => {
  return (
    <div>
        <Menubar></Menubar>
         <div className="about">
            <img className="image12" src="https://source.unsplash.com/1600x1000/?success" alt="" />
        </div>
        <div className='Anarghya'>
            <h1>About Anarghya</h1>
        </div>
        <div className="comm">
            <h1>The New Way To Success</h1> <br />
            <p className='matter'>
            When looking for quality value additions, agile methods of working and engaging customer-friendly <br /><br />
             solutions, the two words that end the search are Anarghya. Since our inception, <br /><br />
              we have held our values high and focussed on smarter ROIs. We like to stay humble and let our work  <br /><br />
              do the talking. At Convergent, we are forever eager to expand our horizons to explore newer paths and <br /><br />
               venture out on the “Road Not Taken”.
            </p>
        </div>

        <div className="uniqueideas">
            <img src="photo1.jpg" alt="" className="unique" />
            <p>
                <h1>Unique Ideas</h1><br />
                <p>Anarghya is the brainchild of five business and IT industry <br /> professionals who came together envisioning a one-stop platform for all technical <br /> and business requirements. Our founders realised how crucial technology is for <br /> developing firms and how finding all such quality services under one roof is still a <br /> tedious task.</p>

            </p>
        </div> <br />

        <div className="uniqueideas">
            <p>
                <h1>Quality Services</h1><br />
                <p>Our commitment makes us dream big, while our team acts on them every waking <br /> moment. This is what makes Convergent Technologies stand out. With regular client <br /> interactions and promised on-time delivery, our services are assuredly the best in the <br /> industry.</p>

            </p>

            <img src="photo2.jpg" alt="" className="unique" />
        </div> <br />

        <div className="uniqueideas">
            <img src="photo3.jpg" alt="" className="unique" />
            <p>
                <h1>Solutions</h1><br />
                <p>Anarghya has only ever seen a steep upward curve, thanks to our clients. From <br />developing e-commerce sites to mobile applications machine learning and <br /> cybersecurity solutions to performance and automation testing, passport and visa <br /> management to other travel solutions, warehouse and HR management systems to <br /> business automation, the list keeps growing. So when we say that we have all your <br /> business solutions stacked in one place, we mean it. Our team of experts will <br /> handcraft solutions for your requirements and deliver products boasting precision <br /> and quality. We at Convergent stand by the philosophy that creating and nurturing <br /> positive employee and customer relations is the key to attaining greater heights. <br /> Now that you know about us, let’ get started!</p>

            </p>
        </div> <br />

        <div className="column">
            <p>
                <h1>Our Vision</h1>
                <span>To make available all your business technicals under one roof <br /> accessible in one click. If it’s business, it’s best with <br /> Anarghya.</span>
            </p>
            <p>
                <h1>Our Mission</h1>
                <span>Our team at Anarghya identifies the basic needs of a <br /> business to have a partner catering to all the much-needed <br /> technicals involved in establishing a successful venture. <br /> Hence, we set out to provide all your services in one place. At <br /> convergent quality comes first and we intend to stick to that.</span>
            </p>
        </div>

        <div className="ourteam">
            <h1>Our Team</h1>
        </div>  <br />

        <div className='team'> 
            <div>
                <img className='teamimage' src="photo1.webp" alt="" />
                <h1>Sundhar</h1>
                <span>UOH</span>
            </div>
            <div>
                <img className='teamimage' src="photo2.webp" alt="" />
                <h1>Jessie</h1>
                <span>IIT Mumbai</span>
            </div>
            <div>
                <img className='teamimage' src="photo3.webp" alt="" />
                <h1>Shravani</h1>
                <span>IBM Calicut</span>
            </div>
            <div>
                <img className='teamimage' src="photo4.webp" alt="" />
                <h1>Mohan</h1>
                <span>IIT Kanpur</span>
            </div>
        </div> <br /> <br />

        <div className="clients">
            <h1>Our Partners</h1> <br /><br />
            <div className="clients1">
                <marquee behavior="alternate" direction="right" > 
                    <img className='imgs' src="ableegh.png" alt="" />
                    <img className='imgs' src="aspin.png" alt="" />
                    <img className='imgs' src="cozmo.png" alt="" />
                    <img className='imgs' src="dnata.png" alt="" />
                    <img className='imgs' src="emirates.png" alt="" />
                    <img className='imgs' src="eviymobility.png" alt="" />
                    <img className='imgs' src="orient-travel.png" alt="" />
                </marquee>
            </div>
        </div>
        <Footer></Footer>
    </div>
        
  )
}

export default Aboutus