import axios from "axios";
import React, { useState } from "react";
import "./Contactus.css";
import Menubar from "./Menubar";

const Contactus =()=>{
    
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        comment: '',
      });
    
      
    
        const [fullname, setfullname] = useState('')
        const [email, setemail] = useState('')
        const [comment, setcomment] = useState('')
    
        const onsubmit = async ()=> {
            const data = {
            fullname,
            email,
            comment,
            }
    
            try{
    
            const response =  await axios.post("http://localhost:8080/api/contact", data);
    
            setfullname('');
            setemail('');
            setcomment('');
            }
            catch (error){
                console.log("error occured",error);
          }
        }   


        const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
        alert('done')
    } else {
      setErrors(validationErrors);
    }
  };

const validateForm = (data) => {
    const errors = {};
    if (!data.fullname) {    
        errors.fullname = "fullname is required";   
    }    
    else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.fullname))) {    
        errors.fullname = "fullname is not valid";  
    }

    if (!data.email) {    
        errors.email = "email is required";
    }    
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {    
        errors.email = "email is not valid";    
    }

    if(!data.comment) {
        errors.comment = "Please enter the comment";
    } else if(comment.length === 50) {
        errors.comment = "minimum 50 characters";
    } 
    return errors;
}

    return(
        <>
        <Menubar/>
        <br/> <br/> <br/> 
        <section class="contactus" >
        <br/>
            <h1> Connect with Us</h1> 
            <br/> <br/> <br/> <br/> 
            <div class="contact-box">
            <div class="contact-left">
                <h3 > Send Your Request </h3> <br/> <br/> <br/> <br/>

                <form onSubmit={handleSubmit}>
                <div>    
                <input type="text" value={formData.fullname} onChange={handleChange} placeholder="FullName" />          
                {errors.fullname && <p style={{color: "red"}}>{errors.fullname}</p>}
                </div>

                <div>    
                <input type="text" value={formData.email} onChange={handleChange} placeholder="Email" />
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                </div>

                <div>    
                <input type="text" value={formData.comment} onChange={handleChange} class="comment" placeholder="Message" />
                {errors.comment && <p style={{color: "red"}}>{errors.comment}</p>}
                </div>
                <button onClick={onsubmit}>Submit</button>
                </form>

            </div>
            <div class="contact-right" style={{marginLeft: "5%"}}>
                <h3> Reach Us </h3>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6348748700343!2d78.40744631037225!3d17.429301601528007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9136803f0a3d%3A0xfb8568429bd0eeb6!2sRegus%20-%20Hyderabad%2C%20Jubilee%20Hills!5e0!3m2!1sen!2sin!4v1697133355644!5m2!1sen!2sin" 
                    width="420" height="170" ></iframe>
            </div>

            
            </div>
            
        </section>
        </>
    )
}
export default Contactus;