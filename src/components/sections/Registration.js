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
              entry fee of £50 on our{" "}
              <a
                href={`https://www.justgiving.com/page/vhnetballtournament2024?utm_medium=fundraising&utm_content=page%2Fvhnetballtournament2024&utm_source=copyLink&utm_campaign=pfp-share`}
                target='_blank'
                rel='noopener noreferrer'>
                {" Just Giving "}
              </a>{" "}
              page (Just Giving account not required).{" "}
            </p>
            <p>
              <strong>Your entry will be confirmed on receipt of this entry and the £50 entry fee - please ensure this is paid on entry, otherwise you may miss out on securing a place.</strong>
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
          <div className='already-registered'>
            <p>
              <strong>Your entry will be confirmed on receipt of this entry and the £50 entry fee - please ensure this is paid on entry, otherwise you may miss out on securing a place.</strong>
            </p>
            <p>
              Already registered? Visit our{" "}
              <a
                href={`https://www.justgiving.com/page/vhnetballtournament2024?utm_medium=fundraising&utm_content=page%2Fvhnetballtournament2024&utm_source=copyLink&utm_campaign=pfp-share`}
                target='_blank'
                rel='noopener noreferrer'>
                {" Just Giving "}
              </a>
              page (Just Giving account not required) to submit
              your £50 entry fee.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registration;
