import React, { useState } from "react";
import NetlifyRegistrationForm from "./NetlifyRegistrationForm";

const Registration = () => {
  const [formSubmitted, setFormSubmitted] = useState("false");

  return (
    <div id='section3' className='section three'>
      <div className='container'>
        <h2>Register</h2>
        {formSubmitted === "false" && (
          <p className='already-registered'>
            Already registered? Visit our{" "}
            <a href='http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10843969?amount=30.00&currency=GBP&reference=EF30&exitUrl=https%3A%2F%2Fvhnetball.netlify.com%2F%3FjgDonationId%3DJUSTGIVING-DONATION-ID&message=Tounament%20entry%20fee'>
              {" Just Giving "}
            </a>{" "}
            page to submit your entry fee.
          </p>
        )}
        <div className='section-content'>
          <NetlifyRegistrationForm formSubmitHandler={setFormSubmitted} />
        </div>
      </div>
    </div>
  );
};

export default Registration;
