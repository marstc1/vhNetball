import React, { useState } from "react";
import NetlifyRegistrationForm from "./NetlifyRegistrationForm";

const Registration = () => {
  const [formSubmitted, setFormSubmitted] = useState("false");

  return (
    <div id='section3' className='section three'>
      <div className='container'>
        <h2>Register</h2>
        {formSubmitted === "false" && (
          <>
            <p>
              To enter a team into either the fun or competitive tournament,
              please complete the registration form below.
            </p>
            <p>
              After submitting your request you will be prompted to submit your
              entry fee of £40 on our{" "}
              <a
                href='https://paypal.me/pools/c/8yZReqJRt8'
                target='_blank'
                rel='noopener noreferrer'>
                {" PayPal "}
              </a>{" "}
              page (PayPal account not required).{" "}
            </p>
            <p>
              Once both steps are complete we will be in touch to confirm your
              place in the tournament. There will no longer be the need to send
              a returnable deposit, however please be reminded that the entry
              fee is non refundable*
            </p>
            <p>
              *the only exception to this is if the tournament date needs to be
              rescheduled due to a change in the return to netball roadmap due
              to Covid. If the date needs to move and you can no longer field a
              team for the rescheduled date, as long as notice is provided
              within 7 days of the new date being communicated then we will
              return your entry fee.{" "}
            </p>
          </>
        )}

        <div className='section-content'>
          <NetlifyRegistrationForm formSubmitHandler={setFormSubmitted} />
        </div>

        {formSubmitted === "false" && (
          <p className='already-registered'>
            Already registered? Visit our{" "}
            <a
              href='https://paypal.me/pools/c/8yZReqJRt8'
              target='_blank'
              rel='noopener noreferrer'>
              {" PayPal "}
            </a>
            page (PayPal account not required) to submit your £40 entry fee.
          </p>
        )}
      </div>
    </div>
  );
};

export default Registration;
