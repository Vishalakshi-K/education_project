import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


function Calender() {
   const [date, changeDate] = useState([23-12-2023, 28-12-2023]);

   function changeValue(val) {
      changeDate(val);
   }

   return (
      <div style={{marginLeft: "20%", marginTop: "-5%"}}>
         <Calendar 
            onChange = {changeValue}
            value={[new Date(2023, 12, 19), new Date(2023, 12, 29)]}
            minDate = {new Date(2022, 8, 21)} // To set minimum date
            maxDate = {new Date(2025, 12, 22)} // To set maximum date
            showWeekNumbers = {true} // TO show week numbers
            showNeighboringMonth = {true} 
            calendarType = "US" // Changing the calender type
            tileDisabled = {({ date }) => date.getDay() === 0} // Disabaling the sunday
         />

      </div>
   );
}

export default Calender;