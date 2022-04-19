import React, { useState } from 'react';

import NetlifyRegistrationForm from './NetlifyRegistrationForm';

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
              entry fee of £45 on our{" "}
              <a
                href='https://www.collectionpot.com/pot/1804410/'
                target='_blank'
                rel='noopener noreferrer'>
                {" Collection Pot "}
              </a>{" "}
              page (Collection Pot account not required).{" "}
            </p>
            <p>
              The week of the tournament we will send out your fixtures and planned timings for the day.
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
              href='https://www.collectionpot.com/pot/1804410/'
              target='_blank'
              rel='noopener noreferrer'>
              {" Collection Pot "}
            </a>
            page (Collection Pot account not required) to submit
            your £45 entry fee.
          </p>
        )}
      </div>
    </div>
  );
};

export default Registration;
