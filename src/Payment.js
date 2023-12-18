import axios from 'axios';
import jsPDF from 'jspdf';
import React, { useState } from 'react';
import "./Payment.css";

const Payment = () => {
  
  const [formData, setFormData] = useState({
    email: '',
    mobilenum :'',
  });

  const[email, setEmail]=useState('')
  const[mobilenum, setMobileNum]=useState('')

  const validateForm = (data) => {
    let errors = {};

    if (!data.email) {    
        errors.email = "email is required";   
    }    
    else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.email))) {    
        errors.email = "email is not valid";  
    }

    if (!data.mobilenum) {    
      errors.mobilenum = "Enter Account Number";   
  }    
  else if (!(/^\d{11}$/.test(data.mobilenum))) {    
      errors.email = "Account Number is not valid";  
  }

  return errors;
}

  const onsubmit = async()=>{
    const data = {
      email,
      mobilenum
    }


    try{

      const response =  await axios.post("http://localhost:8080/api/payment", formData);

      setEmail('');
      setMobileNum('');
      const pdf = new jsPDF();
          pdf.text('Payment Reciept', 80, 20);
          pdf.text('User Name : '+formData.email,80,30);
          pdf.text(formData.email + ' has successfully Paid', 20, 90);
           pdf.text('Amount : '+formData.amount,80,70)
           pdf.text('Status : Success ',80,80);
          pdf.save('BookingReciept.pdf');
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
        alert('You are successfully Booked' + formData.fullname)
        window.location.assign("HTML")    
    } else {
      setErrors(validationErrors);
    }
  };




  

  return (
    <>
    <h1 style={{marginLeft: "45%"}}>Payment</h1>
    <form onSubmit={handleSubmit}>
    <div className='pay'>
      <div className='pay-types'>
        <h6>Total Pay</h6>
        <h1>499 Rs.</h1> <br/> <br/> <br/>
        <h5>Credit Card</h5>
        <h5>Visa Card</h5>
        <h5>Net Banking</h5>
      </div>
      <div className='pay-details'>
        <br/>
      <div>
        <label>email</label>
        <input type="text" placeholder='name' name='email'
        value={formData.email}
        onChange={handleChange}/>
        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
      </div> <br/>
      <div>
        <label>number</label>
        <input type="text" placeholder='number' 
        value={formData.mobilenum} name='mobilenum'
        onChange={handleChange}/>
        {errors.mobilenum && <p style={{color: "red"}}>{errors.mobilenum}</p>}
      </div> <br/>
      <div className='pay-sub'>
        <div>
          <label>MONTH/YEAR</label> <br/>
          <input type="text" placeholder='MM/YYYY' 
          style={{width: "50%"}}/>
        </div>
        <div>
          <label>CVV</label> <br/>
          <input type="text" placeholder='****' 
          style={{width: "50%"}}/>
        </div>
      </div><br/>
      <div>
      <button onClick={onsubmit} style={{marginLeft: "40%", width: "10%"}}>Pay</button>
      </div>
      </div>
      </div>
      </form>
      </>
  );
};

export default Payment;
