import React,{useState} from "react";
import "./PaymentForm.css";
import Subscription from "./subscription/Subscription";
import Summary from "./subscription/Summary";

function PaymentForm() {

  const [subtotal, setSubtotal] = useState(0);

  const handleSubscriptionClick = (price) => {
    // Calculate discount
    const discount = price * 0.3;

    // Apply GST
    const gst = (price - discount) * 0.18;

    // Calculate final subtotal
    const finalSubtotal = price - discount + gst;

    setSubtotal(finalSubtotal);
  };



  return (
    <div className="form">
      <div className="progress_bar">
        <div className="stage1">
          <div className="icon1">1</div>
          <span className="signup">Sign Up</span>
        </div>
        <div className="stage1">
          <div className="icon1">2</div>
          <span className="signup">Subscribe</span>
        </div>
      </div>
      <div className="form_header">
        <p className="form_head_text">Select your subscription plan</p>
      </div>

      <div className="input_container">
      <div className="text_field1">
        <input type="radio" className="radio_button" />
        <div className="text_container">
          <p className="sub_text">12 Month Subscription</p>
          <div className="right_text">
            <div className="top_text">
              <p className="top_text1">Total</p>
              <p className="top_text2">₹99</p>
            </div>
            <div className="bottom_text">
              <p className="bottom_text1">₹8</p>
              <p className="bottom_text2"> /mo</p>
            </div>
          </div>
        </div>
        <div className="tag"> Offer expired </div>
      </div>


       <Subscription 
        month={'12 Month Subscription'}
        price={179}
        perMonth={15}
        onSubscriptionClick={handleSubscriptionClick}
       />

       <Subscription 
        month={'6 Month Subscription'}
        price={149}
        perMonth={25}
        onSubscriptionClick={handleSubscriptionClick}
       />

       <Subscription 
        month={'3 Month Subscription'}
        price={99}
        perMonth={33}
        onSubscriptionClick={handleSubscriptionClick}
       />
      </div>
    
      <div className="summary_container">
       <Summary />

       <div className="total_container">
      <p className="left_gst">Total (Incl. of 18% GST)</p>
      <p className="right_total">₹{subtotal.toFixed(0)}</p>
      </div>
       
    </div>


      <div className="button_container">
        <button className="secondary_btn">CANCEL</button>
        <button className="primary_btn">PROCEED TO PAY</button>
      </div>

      <div className="icon_cont">
      <img src="https://badges.razorpay.com/badge-dark.png" className="razorpay" alt="" />

      </div>
    </div>
  );
}

export default PaymentForm;