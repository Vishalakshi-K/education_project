import axios from "axios";
import React, { useState } from "react";
import './Signup.css';
import Menubar from "./Menubar";


const Signup = () => {
    
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
    gender: '',
    city: '',
  });

  

    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [gender, setgender] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const [city, setcity] = useState('')

    const onsubmit = async ()=> {
        const data = {
        fullname,
        email,
        password,
        confirmpassword,
        gender,
        phonenumber,
        city,
        }

        try{

        const response =  await axios.post("http://localhost:8080/api/education", formData);

        setfullname('');
        setemail('');
        setpassword('');
        setconfirmpassword('');
        setgender('');
        setphonenumber('');
        setcity('');

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
        alert('You have been successfully registered.')
        window.location.assign("Studentlogin")    
    } else {
      setErrors(validationErrors);
    }
  };


  const validateForm = (data) => {
    let errors = {};

    if (!data.fullname) {    
        errors.fullname = "fullname is required";   
    }    
    else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.fullname))) {    
        errors.fullname = "fullname is not valid";  
    }    

    //Email    
    if (!data.email) {    
        errors.email = "email is required";
    }    
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {    
        errors.email = "email is not valid";    
    }    

    //password
    if (!data.password) {    
        errors.password = "password is required";    
    }    
    else if (!(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(data.password))) {    
        errors.password = "7 to 15 characters which contain at least one numeric digit and a special character";    
    }   
    
    //confirm password
    if (!data.confirmpassword) {    
        errors.confirmpassword = "confirmpassword is required";    
    }    
    else if (data.password !== data.confirmpassword) {    
        errors.confirmpassword = "password and confirm password are not same";    
    } 

    //Gender    
    if (data.gender === '' || data.gender === "select") {    
        errors.gender = "Select gender.";    
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

    //City    
    if (data.city === '' || data.city === "select") { 
        errors.city = "Select city.";    
    }    
    return errors;
  };



  return (
    <>
    <Menubar></Menubar>
        <div className="formstusign">    
                <h3 style={{ textAlign: "center", fontSize: "2rem", marginTop: "-2%" }} > Signup </ h3>    
                <div>    
                    <form onSubmit={handleSubmit}>    
                        <div>    
                            <label htmlFor="fullName">Full Name</label>    
                            <input type="text" name="fullname"    
                                placeholder="Your name.."    
                                value={formData.fullname}
                                onChange={handleChange}
                              />
                              {errors.fullname && <p style={{color: "red"}}>{errors.fullname}</p>}
                        </div>
                        <div>    
                            <label htmlFor="email">Email Id</label>  
                            <input type="text" name="email"    
                                value={formData.email}    
                                onChange={handleChange}
                                placeholder="Your email id.."    
                                />
                                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
                        </div> <br/>   
                        <div>    
                            <label htmlFor="password">password</label>  
                            <input type="password" name="password"    
                                value={formData.password}    
                                onChange={handleChange}
                                placeholder="Enter Password.."     
                                style={{marginLeft: "20%", height: "4vh", width: "50%"}}/>
                                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}       
                        </div>
                        <br/>
                        <div>    
                            <label htmlFor="confirmpassword">confirmpassword</label>  
                            <input type="password" name="confirmpassword"    
                                value={formData.confirmpassword}    
                                onChange={handleChange}
                                placeholder="Enter Password.."     
                                style={{marginLeft: "8%", height: "4vh", width: "50%"}}/>
                                {errors.confirmpassword && <p style={{color: "red"}}>{errors.confirmpassword}</p>}       
                        </div>
                        <br/>
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" 
                                onChange={handleChange}   
                                value={formData.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                <option value="female">Other</option>    
                                </select>
                                {errors.gender && <p style={{color: "red"}}>{errors.gender}</p>}               
                                </div>    
                                <div>    
                                <label htmlFor="phoneNumber">Phone Number</label>    
                                <input type="text" name="phonenumber"    
                                onChange={handleChange}
                                value={formData.phonenumber}    
                                placeholder="Your phone number.."    
                                />
                                {errors.phonenumber && <p style={{color: "red"}}>{errors.phonenumber}</p>}           
                                </div>    
                                <div>    
                                <label htmlFor="city">City</label> 
                                <select name="city"    
                                value={formData.city}    
                                onChange={handleChange}
                                >    
                                <option value="select">--Select--</option>    
                                <option value="Pune">Pune</option>    
                                <option value="Mumbai">Mumbai</option>    
                                <option value="Hyderabad">Hyderabad</option>    
                            </select>
                            {errors.city && <p style={{color: "red"}}>{errors.city}</p>}               
                        </div>    
                        <button onClick={onsubmit}
                        style={{width: "25%", paddingTop: "5px", marginLeft: "40%"}}>Submit</button> 
                    </form>    
                </div>    
            </div >    
            </>
  );
};


export default Signup;

 