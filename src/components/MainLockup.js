import React from 'react';
import './MainLockup.css';
import JobRel from './images/Job_rel.png';
import Hour from './images/hour.png';
import Live from './images/live.png';
import Scholar from './images/scholar.png';
import Ad_Free from './images/ad-free.png';
import PaymentForm from './PaymentForm';


function MainLockup() {
  return (
    <div className="container">

    <div className="main_lockup">
    <div className="header">
    <div className="frame12505">
      <p className="frame12302" >Access curated courses worth</p>
    </div>     
       <div className="frame12400">
        <span className="text">₹18,500</span>
        <span className="rectangle"></span>
        <span className="at_just">at just</span>
        <span className="nine">₹99</span>
        <span className="per_year"> per year!</span>
       </div>            
      </div>

 <div className="feature_content">

 
    <div className="pointer">
    <img  src={JobRel}  alt="" />
      <div className="text_cont">
        <span className="blue_text all_text">100+</span>
        <span className="white_text all_text">Job relevant courses</span>
      </div>
      </div>
    <div className="pointer">
      <img style={{marginLeft:'-12px'}} src={Hour} alt="" />
      <div className="text_cont">
        <span className="blue_text all_text">20,000+</span>
        <span className="white_text all_text">Hours of content</span>
      </div>
      </div>
      
    <div className="pointer">
      <img  style={{marginLeft:'-8px'}} src={Live} alt="" />
      <div className="text_cont">
        <span className="blue_text all_text">Exclusive</span>
        <span className="white_text all_text">webinar access</span>
      </div>
      </div>
    <div className="pointer">
      <img style={{marginLeft:'-8px'}} src={Scholar} alt="" />
      <div className="text_cont">
        <span className="white_text all_text">Scholarship worth</span>
        <span className="blue_text all_text">₹94,500</span>
      </div>
      </div>
    <div className="pointer">
      <img style={{marginLeft:'10px'}} src={Ad_Free} alt="" />
      <div className="text_cont">
        <span className="blue_text all_text">Ad Free</span>
        <span className="white_text all_text">learning experience</span>
      </div>
      </div>
      </div>
    </div>
      <PaymentForm />
    </div>
    
    
  )
}

export default MainLockup