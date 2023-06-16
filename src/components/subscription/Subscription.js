import React from "react";
import './subscription.css';

function Subscription({ month, price, perMonth, onSubscriptionClick }) {

    const handleSubscriptionClick = () => {
      onSubscriptionClick(price);
    };
  return (
    <>

    <div className="tag_recom">
      <h3 className="recommended">Recommended</h3>
    </div>

      <div className="text_field2">
        <input type="radio" className="radio_button1" onClick={handleSubscriptionClick} />
        <div className="text_container">
          <p className="sub_text2">{month}</p>
          <div className="right_text">
            <div className="top_text">
              <p className="top_text12">Total</p>
              <p className="top_text21">₹{price}</p>
            </div>
            <div className="bottom_text">
              <p className="bottom_text12">₹{perMonth}</p>
              <p className="bottom_text2"> /mo</p>
            </div>
          </div>
        </div>
        </div>
        </>
  );
}

export default Subscription;