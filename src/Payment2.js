import axios from "axios";
import React, { useState } from "react";
import "./Payment.css";

const Payment2=()=> {
    
    const [formData, setFormData] = useState({
        email: '',
        phonenumber: '',
      });
    
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
            alert('Payment Successfull')
            window.location.assign("Coursepage2")    
        } else {
          setErrors(validationErrors);
        }
      };
    
    
      const validateForm = (data) => {
        let errors = {};   
    
        //Email    
        if (!data.email) {    
            errors.email = "email is required";
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {    
            errors.email = "email is not valid";    
        }    
    
        //Phone number    
        if (!data.phonenumber) {    
            errors.phonenumber = "Phone number is required.";    
        }    
        else {    
            if (!(/^(0|91)?[6-9][0-9]{9}$/.test(data.phonenumber))) {    
                errors.phonenumber = "Invalid phone number.";    
            }    
        }       
        return errors;
      };
    


    return (
        <>
            <div className="payment">
                <h1>Pay</h1>
                <form onSubmit={handleSubmit}>
                    <div className="pay-1">
                        <label className="pay-email" htmlFor="email">email  </label>
                        <input type="text" name="email" style={{ marginLeft: "14.5%", width: "17%" }} value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter Email"/>
                            {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                    </div>
                    <div className="pay-2">
                        <label className="pay-mobile"> Mobile Num : </label>
                        <input type="text" name="phonenumber"  style={{ marginLeft: "4%", width: "17%" }} value={formData.phonenumber}
                            onChange={handleChange}
                            placeholder="Enter Mobile Number"/> 
                            {errors.phonenumber && <p style={{color: "red"}}>{errors.phonenumber}</p>}                
                            </div>
                    <div className="pay-3">
                        <div className="pay-3-left" style={{ marginTop: "-4%" }} >
                            <h4 style={{ marginLeft: "30%", paddingTop: "20px" }}> Amount </h4>
                        </div>
                        <div className="pay-3-right" style={{ marginTop: "-4%" }}>
                            <h4 style={{ marginLeft: "30%", paddingTop: "20px" }}> 499 </h4>
                        </div>
                    </div>
                    <div className="pay-4" >
                        <button onClick={onsubmit} style={{width: "20%"}}>pay</button>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Payment2;