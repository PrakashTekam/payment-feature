import React from 'react';
import './Summary.css';


function Summary() {
  return (
    <>
    <div className="summary_text">
      <p className="sum_text">Subscription Fee</p>
      <p className="sum_text">₹18,500</p>
    </div>

    <div className="alert">
      <div className="alert_header">
        <p className="alert_text">Limited time offer</p>
        <p className="alert_text1">-₹18,401</p>
      </div>
      <div className="alert_body">
        <p className="alert_body_text">@</p>
        <p className="alert_body_text">Offer valid till 25th March 2023</p>
      </div>
    </div>
  </>
  
  )
}

export default Summary