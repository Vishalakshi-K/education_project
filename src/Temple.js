import React from 'react';
import"./Temple.css";
import { useState } from 'react';
import axios from 'axios';
 

const Temple = () => {

  const [formData, setFormData] = useState({
    templename: '',
    sevaname: '',
    sevadate: '',
    numpersons: '',
    phonenum: '',
    gothram: '',
    fullname: '',
    idproff: '',
    idnum: '',
  });



  const[templenamep, settemplenamep]=useState('');
  const[sevanamep, setsevanamep]=useState('');
  const[sevadatep, setsevadatep]=useState('');
  const[numpersonsp, setnumpersonsp]=useState('');
  const[phonenump, setphonenump]=useState('');
  const[gothramp, setgothramp]=useState('');
  const[fullnamep, setfullnamep]=useState('');
  const[idproffp, setidproffp]=useState('');
  const[idnump, setidnump]=useState('');
  const onsubmit=async()=>{
    
    
  

    const data={

      templenamep,
      sevanamep,
      sevadatep,
      numpersonsp,
      phonenump,
      gothramp,
      fullnamep,
      idproffp,
      idnump,
    }
      try{
          const response= axios.post("http://localhost:8080/parok",formData);
      
          settemplenamep('');
          setsevanamep('');
          setsevadatep('');
          setnumpersonsp('');
          setphonenump('');
          setgothramp('');
          setfullnamep('');
          setidproffp('');
          setidnump('');
      }
  catch{
      console.log("error occured");
  }
}
  

const [errors, setErrors] = useState({});

const validateForm = (data) => {
  let errors = {};

  if (!data.templename) {
    errors.templename = "Select Temple.";  
  }
  else  if (!data.sevaname) {
    errors.sevaname="select type of seva";
  }
  else if(!data.sevadate){
    errors.sevadate="Select your seva date";
  }
  else if(!data.numpersons){
    errors.numpersons="Select no.of members";
  }


if (!data.phonenum) {    
    errors.phonenum = "Phone number is required.";    
}    
else {    
    if (!(/^(0|91)?[6-9][0-9]{9}$/.test(data.phonenum))) {    
        errors.phonenum = "Invalid phone number.";    
    }    
} 

if (!data.gothram) {    
  errors.gothram = "gothram is required";   
}    
else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.gothram))) {    
 errors.gothram = "gothram is not valid";  
}  

if (!data.fullname) {    
errors.fullname = "fullname is required";   
}    
else if (!(/^[a-zA-Z]+ [a-zA-Z]+$/.test(data.fullname))) {    
errors.fullname = "fullname is not valid";  
}  

if (!data.idproff) { 
errors.idproff = "Select Id Proff.";    
}  
else if (!/^\d{12}$/.test(data.idnum) && data.idproff==="AADHAAR" ) {
errors.idnum ="Invalid adhar number. Please enter a 12-digit number.";

}

else if (!/^\d{10}$/.test(data.idnum) && data.idproff==="ration" ) {
  errors.idnum ="Invalid ration number. Please enter a 10-digit number.";

}

return errors;

};


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



  



    
  return (
    <div className='prathyaksha-book'> <br/>
        <h1 style={{marginLeft: "25%"}}>Prathyaksha-Seva Booking</h1>
      <form className="B_sd-form" onSubmit={handleSubmit}>
  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12  xssm-pr-0 pl-0 " 
  style={{marginLeft: "20%"}}>
    <br/> <br/>
    <label>
      Select Temple<span className="sd-imp">*</span>
    </label>
    <select className="form-control sd-voilet" name='templename'
    value={formData.templename} onChange={handleChange} id="stemple" placeholder="select Temple">
      <option></option>
      <option value="KLNKDR">
        SREEMATH KHADRI LAKSHMI NARASIMHA SWAMY VARI DEVASTHANAM, KADIRI{" "}
      </option>
      <option value="MAKRNL">
        Sri Maddileti Narasimha Swamy Temple, R.S.Rangapuram, Bethamcherla{" "}
      </option>
      <option value="MKJNWD">
        Sri Mallikarjuna Kamakshi Tayee Ammavari Temple, Zonnawada, Nellore{" "}
      </option>
      <option value="SVSTKK">Sri Venkateswara Swamy Temple, Kallakurru</option>
      <option value="SMSTG">
        Sri Malleswara Swamy Temple, Pedakakani, Guntur{" "}
      </option>
      <option value="SNMMVK">
        Sri Nagareswara Mahishasuramardhini &amp; Sri Vasavi Kanyakaparameswari
        Devasthanam, Penugonda{" "}
      </option>
      <option value="MAGGM">
        Sri Maddi Anjaneya Swamy Temple, Guravaigudem
      </option>
      <option value="SKHAHM">
        Sri Kotilinga Hari Hara Mahakshetram, Muktyala, Jaggayyapeta
      </option>
      <option value="SPAD">
        Sri peddinti Ammavari Devasthanam, Kolletikota{" "}
      </option>
      <option value="SLNSD">
        Sri Lakshmi Narasimha Swamy Vari Devasthanam, Antharvedi{" "}
      </option>
      <option value="VSTADP">
        Sri Veerabhadra Swamy Temple, Alladupalli (V), Chapadu
      </option>
      <option value="VBRCHT">Sri Veerabhadra Swamy Temple, Rayachoti</option>
      <option value="SAMPSVST">
        Sri alivelumanga padmavati sametha vykunta Venkateswara swamy
        devasthanam, Mantada{" "}
      </option>
      <option value="SCDBPL">
        Sri Chowdeswari Devi Temple, Nandavaram, Banaganaplli, Nandyal{" "}
      </option>
      <option value="SBSTGU">Sri bhimeswara swamy temple , Gudivada</option>
      <option value="SBTSRST">
        Sri Bala Tripura Sundari Sametha Sri Ramalingeswara Swamy Devasthanam,
        Suryarao Peta
      </option>
      <option value="SUSBPL">
        Sri Umamaheswara Swamy Temple, Yaganti (V), Banaganapalli (M), Nandyal
        Dt.
      </option>
      <option value="SVSKRS">
        Sri Venkateswara Swamy &amp; Sri Kodanda Rama Swamy Vari Devasthanam,
        Thotapalli, Vizianagaram{" "}
      </option>
      <option value="SRASMC">
        Sri Ranganayaka Swamy Temple - Machilipatnam{" "}
      </option>
      <option value="RSVZRM">
        Sri Ramaswamy Vari Devasthanam, Ramatheertham{" "}
      </option>
      <option value="SKST">Sri Kurmanadha Swamy Temple, Sri Kurmam</option>
      <option value="SYSSKM">
        Sri Yendala Mallikharjuna Swamy Temple, Ravivalasa, Tekkali{" "}
      </option>
      <option value="SKDAT">Sri kotadurga Ammavari Temple, palakonda</option>
      <option value="SKPAT">
        Sri Karakachettu Polamamba Ammavari Devasthanam Pedawaltair
      </option>
      <option value="SYAT">
        Sri Yernimamba Ammavari Devasthanam , Gnanapuram{" "}
      </option>
      <option value="SEAT">
        Sri Erukumamaba Ammavari Temple, Dondaparthi.{" "}
      </option>
      <option value="NAVSKP">
        Sri Nookambica Ammavari Devasthanam, Anakapalli{" "}
      </option>
      <option value="SSVT">
        Sri Sampath Vinayagar Temple Trust, Visakhapatnam{" "}
      </option>
      <option value="SBSVVS">
        Sri Bhu Sametha Vijaya Venkateswara Swamy Temple, Visakhapatnam
      </option>
      <option value="SSST">
        Sri Satyanarayana Swamy Temple, Visakhapatnam
      </option>
      <option value="SSARVE">
        Sri Suryanarayana Swamy Vari Devasthanam, Arasavalli
      </option>
      <option value="SSSD">
        Sri Subrahmanyeswara Swamy Vari Devasthanam, Mopidevi{" "}
      </option>
      <option value="STAD">
        Sri Talupulamma Ammavari Devasthanam, Lova, Tuni{" "}
      </option>
      <option value="VSMRML">Sri Veereswara Swamy Temple, Muramalla</option>
      <option value="SVSTV">Sri Venkateswara Swamy Temple, Vadapalli</option>
      <option value="SVST">Sri Vighneswara Swamy Temple, Ainavilli</option>
      <option value="SNASVD">
        Sri Nettikanti Anjaneya Swamy Vari Devasthanam, Kasapuram
      </option>
      <option value="SMESD">
        Sri Mahanandeeswara Swamy Vari Devasthanam, Mahanandi{" "}
      </option>
      <option value="SKML">
        Sri Kanaka Mahalakshmi Ammavari Devasthanam, Visakhapatnam
      </option>
      <option value="SVLNSD">
        Sri Varaha Lakshmi Narasimha Swamy Vari Devasthanam, Simhachalam
      </option>
      <option value="STADPPL">
        Sri Tirupatamma Ammavari Devasthanam, Penuganchiprolu
      </option>
      <option value="SVVSSD">
        Sri Veera Venkata Satyanarayana swamy vari Devasthanam, Annavaram{" "}
      </option>
      <option value="SKHTD">
        Sri Kalahastheeswara Swamy Vari Devasthanam, Sri Kalahasthi{" "}
      </option>
      <option value="SVSVD">
        Sri Venkateswara Swamy Vari Devasthanam, Dwaraka Tirumala
      </option>
      <option value="SSVVSD">
        Swayambhu Sri Varasiddi Vinayaka Swamy Vari Devasthanam, Kanipakam{" "}
      </option>
      <option value="SBMSD">
        Sri Bhramaramba Mallikarjuna Swamy Varla Devasthanam, Srisailam
      </option>
      <option value="SDMSD">
        Sri Durga Malleshwara Swamy Varla Devasthanam, Vijayawada{" "}
      </option>
    </select>
    <p className="sd-EM mr-15" />
    {errors.templename && <p style={{color: "red"}}>{errors.templename}</p>}
  </div>
  <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12  xssm-pr-0 pl-0 "
  style={{marginLeft: "20%"}}>
    <div>
    <label>
      Select seva<span className="sd-imp" >*</span>
    </label>
    <select className="form-control sd-voilet" name="sevaname"
    value={formData.sevaname} onChange={handleChange} id="sevatype" placeholder="select seva">
      <option></option>
      <option value="Nithyakalyanam">Nithya Kalyanam</option>
      <option value="panchambrutha">Panchambrutha Abhishekam  </option>
      <option value="Rudrabhishekam">Rudhraabhishekam </option>
      <option value="Kalyanam">Kalyanam</option>
    </select>
    {errors.sevaname && <p style={{color: "red"}}>{errors.sevaname}</p>}    
    </div>
    <hr className="clearfix" />
    <div className="sd-profile" style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 xssm-pr-0 pl-0">
        <label>
          Select Date<span className="sd-imp">*</span>
        </label>
        <div className="sd-dob customDatePickerWidth">
          <div className="react-datepicker-wrapper">
            <div className="react-datepicker__input-container">
              <input
                type="Date"
                placeholder="DD/MM/YYYY"
                className=""
                value={formData.sevadate} onChange={handleChange}
                id="date"
              />
               {errors.sevadate && <p style={{color: "red"}}>{errors.sevadate}</p>}
            </div>
          </div>
        </div>
        <p className="sd-EM mr-15" />
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6  xssm-pl-0 xssm-pr-0  ">
        <label>
          Number of Person(s)<span className="sd-imp">*</span>
        </label>
        <select className="form-control sd-voilet" name="numpersons"
        value={formData.numpersons} onChange={handleChange} id="nmembers">
          <option></option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        {errors.numpersons && <p style={{color: "red"}}>{errors.numpersons}</p>}
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6  xssm-pl-0 xssm-pr-0  pl-0">
        <label>
          Mobile Number<span className="sd-imp">*</span>
        </label>
        <div className="sd-profile-mobile">
          <div className="sd-phone-voilet react-tel-input ">
            <div className="special-label"></div>
            <input
              className="form-control "
              placeholder="Enter Your 10 digit mobile number"
              type="tel"
              defaultValue={+91} name='phonenum'
              value={formData.phonenum} onChange={handleChange} 
              id="mobile"
            />
             {errors.phonenum && <p style={{color: "red"}}>{errors.phonenum}</p>}
            <div className="flag-dropdown ">
              <div
                className="selected-flag"
                title="India: + 91"
                tabIndex={0}
                role="button"
                aria-haspopup="listbox"
              >
                <div className="flag in">
                  <div className="arrow"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="d-EM " />
        </div>
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 xssm-pl-0 xssm-pr-0   mb-0">
        <label>
          Gothram<span className="sd-imp">*</span>
        </label>
        <input
          maxLength={30}
          type="text"
          placeholder="Enter gothram."
          className="form-control"
          defaultValue="" name='gothram'
          value={formData.gothram}    
          onChange={handleChange}
          id="gothram"
        />
         {errors.gothram && <p style={{color: "red"}}>{errors.gothram}</p>}
        <p className="sd-EM " />
      </div>
      <h4> Note : Free for Children under 10 years</h4>
    </div>
    <div className="clearfix">
      <hr className="clearfix" />
    </div>
    <div className="clearfix">
      <div
        className="form-group col-xs-12 col-sm-12 col-md-1 col-lg-1  xssm-pr-0 pl-0 ml-0 mr-0"
        style={{ width: "2vw" }}
      >
        <label></label>
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-11 col-lg-11  xssm-pl-0 pr-0">
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-4 xssm-pr-0 pl-0">
          <label>
            Full Name<span className="sd-imp">*</span>
          </label>
          <input
            maxLength={20}
            autoComplete="new-password"
            placeholder="Please enter your name"
            type="text"
            className="form-control" name='fullname'
            value={formData.fullname} onChange={handleChange}
            id="name" style={{width: "450%"}}
          />
           {errors.fullname && <p style={{color: "red"}}>{errors.fullname}</p>}
          <p className="sd-EM mr-15 " />
        </div>
        <div style={{display: "flex"}}>
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-4 xssm-pr-0"
        style={{marginRight: "-50%"}}>
          <label>
            Select ID Proof<span className="sd-imp">*</span>
          </label>
          <select className="form-control" name='idproff'
          value={formData.idproff} onChange={handleChange}
          placeholder="select ID proff" id="number">
            <option></option>
            <option value="AADHAAR">AADHAAR</option>
            <option value="ration">Ration Card</option>
          </select>
          <p className="sd-EM mr-15"></p>
          {errors.idproff && <p style={{color: "red"}}>{errors.idproff}</p>}
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-6 col-lg-4 xssm-pl-0 xssm-pr-0"
        style={{marginLeft: "110%", marginRight: "-99%"}}>
          <label>
            Enter ID Number<span className="sd-imp">*</span>
          </label>
          <input
            placeholder="Please enter your id number"
            type="text"
            className="form-control"
            style={{ textTransform: "none", width: "150%" }}  name='idnum'
            value={formData.idnum} onChange={handleChange}
            id="idnumber"
          />
           {errors.idnum && <p style={{color: "red"}}>{errors.idnum}</p>}
          <p className="sd-EM mr-15 " />
        </div>
        </div>
      </div>
    </div>
    <hr className="clearfix" />



    <div>
        <h4>
        Note: Pilgrims who book for Paroksha Seva should bring the printed
        copy of their receipt.
        </h4>
        <li>
            For all Sevas & Pujas, Male sevadars shall wear Pancha with
            Kanduva and females shall wear Saree with Blouse invariably. Other
            dresses will not be allowed
        </li>
        <li>
            Only couple (Wife &amp; Husband) or single person will be allowed to
            perform the Seva on one ticket.
        </li>
        <li>
            Children below 10 years of age are also permitted to follow their
            parents.
        </li>
        <li>
            An ID proof on the name of the ticket holder must also be shown.
        </li>
        <li>
            This ticket is non-transferable and it cannot be cancelled.
        </li>
        <li>
            Mobiles are strictly prohibited in Temple Premises.
        </li>
        <li>
            Devotees must report just 15 minutes prior the Seva timings at the
            ritual spot.
        </li>
    </div>





    
    <hr className="clearfix" />
    <div className="clearfix mt-50"> <br/>
      <button className="sd-btn-orange" style={{marginLeft: "40%", backgroundColor: "red", color: "black"}}
      onClick={onsubmit}>
        submit
      </button>
    </div>
  </div>
</form>

    </div>
  )
}

export default Temple;