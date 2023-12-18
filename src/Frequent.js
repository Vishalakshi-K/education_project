import axios from "axios";
import React, { useState } from "react";
import Faq from 'react-faq-component';
import "./Frequent.css";

const data = {
    title: "Most Frequently Asked Questions",
    rows: [
      {
        title: "Do you have any query",
        content: " Do you have any query"
      },
      {
        title: "Do you have any query",
        content: "Do you have any query"
      },
      {
        title: "Do you have any query ",
        content: "Do you have any query"
      },
      {
        title: "Do you have any query",
        content: "Do you have any query"
      }]
  }
  

  export default function Frequent () {
    const [Query, setQuery] = useState('')
  const onsubmit = async ()=>{
    const data={
      Query,
    }
    try{
  
    const response =  await axios.post("http://localhost:8080/api/query", data);
    
    setQuery('');
    }
    catch (error){
          console.log("error occured",error);
    }
  }
      return (
        <>
        <div style={{marginTop: "10%", width: "60%", marginLeft: "15%", 
        backgroundImage: "url(${https://www.securescreeningservices.com/wp-content/uploads/2022/12/shutterstock_2056186745.jpg})"}} >
          <Faq data={data}/>
        </div>
        
        </>
      )
    }
  
  