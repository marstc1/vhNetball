import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Scroll from 'react-scroll';
import * as Yup from 'yup';

// import { animateScroll as scroll } from 'react-scroll'

const NetlifyRegistrationForm = ({ formSubmitHandler }) => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const contactNumberValidation = Yup.string()
    .required("Please enter a contact number")
    .matches(
      /(^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$)/,
      "Please enter a valid UK telephone number"
    );

  const initialValues = {
    teamName: "",
    contactName: "",
    contactNumber: "",
    email: "",
    secondaryContactName: "",
    secondaryContactNumber: "",
    secondaryEmail: "",
    isCompetitive: "Competitive - Mixed",
    umpireName: "",
    music: "",
  };

  var scroller = Scroll.scroller;

  const handleSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "EventRegistration_2023_v1", ...values }),
    })
      .then(() => {
        resetForm({});
        setStatus({ success: true });
        formSubmitHandler("true");
        scroller.scrollTo("section3");
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
        setStatus({ success: false });
        setSubmitting(false);
        setErrors({ submit: error.message });
      });
  };

  const validationSchema = Yup.object().shape({
    teamName: Yup.string().required("Please enter a team name"),
    contactName: Yup.string().required("Please enter a contact name"),
    contactNumber: contactNumberValidation,
    email: Yup.string().email().required("Please enter an email"),
    secondaryContactName: Yup.string().required("Please enter a contact name"),
    secondaryContactNumber: contactNumberValidation,
    secondaryEmail: Yup.string().email().required("Please enter an email"),
    isCompetitive: Yup.string().required("Please select an option"),
    umpireName: Yup.string().when("isCompetitive", {
      is: (val) => val === "Competitive - I am playing to win!",
      then: Yup.string().required("Please enter the name of your umpire"),
    }),
    music: Yup.string().required("Please enter a song name and artist"),
  });

  const [competitive, setCompetitive] = useState(false);
  const [mixedCompetitive, setMixedCompetitive] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {(props) => {
        const {
          values,
          touched,
          status,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          setErrors,
        } = props;

        if (!!status && !!status.success) {
          return (
            <div>
              <h3 className='pad-bottom-lg'>
                Fantastic! - You have been registered
              </h3>
              <p>
                To complete your entry please submit the entry fee of £50 to our
                <a
                  href={`https://www.justgiving.com/page/victoriahawkinsmemorial?newPage=true&amount=50.00&reference=${values.teamName}`}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {" Just Giving "}
                </a>
                page (Just Giving account not required),
                including your team name so that we can match your payment with
                your entry. We will then be in touch to confirm details of the
                day and next steps.
              </p>
              <p>Thank you – we look forward to seeing you at this event!</p>
            </div>
          );
        }

        return (
          <>
            <form
              name='EventRegistration_2023_v1'
              autoComplete='off'
              onSubmit={handleSubmit}
              method='post'
              data-netlify='true'
              dat-netlify-honeypot='bot-field'>
              <input
                type='hidden'
                name='form-name'
                value='EventRegistration_2023_v1'
              />
              <div hidden>
                <input name='bot-field' />
              </div>
              <label htmlFor='teamName'>Team Name</label>
              <input
                type='text'
                value={values.teamName}
                id='teamName'
                name='teamName'
                placeholder='Enter your team name'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.teamName && touched.teamName && "error"}
              />
              {errors.teamName && touched.teamName && (
                <div className='input-feedback'>{errors.teamName}</div>
              )}

              <p>Primary Contact</p>

              <label htmlFor='contactName'>Contact Name</label>
              <input
                type='text'
                value={values.contactName}
                id='contactName'
                name='contactName'
                placeholder='Enter your contact name'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.contactName && touched.contactName && "error"}
              />
              {errors.contactName && touched.contactName && (
                <div className='input-feedback'>{errors.contactName}</div>
              )}

              <label htmlFor='contactNumber'>Contact Number</label>
              <input
                type='text'
                value={values.contactNumber}
                id='contactNumber'
                name='contactNumber'
                placeholder='Enter your contact number'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.contactNumber && touched.contactNumber && "error"
                }
              />
              {errors.contactNumber && touched.contactNumber && (
                <div className='input-feedback'>{errors.contactNumber}</div>
              )}

              <label htmlFor='email'>Email Address</label>
              <input
                type='text'
                value={values.email}
                id='email'
                name='email'
                placeholder='Enter your email address'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className='input-feedback'>{errors.email}</div>
              )}

              <p>Secondary Contact</p>

              <label htmlFor='secondaryContactName'>Contact Name</label>
              <input
                type='text'
                value={values.secondaryContactName}
                id='secondaryContactName'
                name='secondaryContactName'
                placeholder='Enter a contact name'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.secondaryContactName &&
                  touched.secondaryContactName &&
                  "error"
                }
              />
              {errors.secondaryContactName && touched.secondaryContactName && (
                <div className='input-feedback'>
                  {errors.secondaryContactName}
                </div>
              )}

              <label htmlFor='secondaryContactNumber'>Contact Number</label>
              <input
                type='text'
                value={values.secondaryContactNumber}
                id='secondaryContactNumber'
                name='secondaryContactNumber'
                placeholder='Enter a contact number'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.secondaryContactNumber &&
                  touched.secondaryContactNumber &&
                  "error"
                }
              />
              {errors.secondaryContactNumber &&
                touched.secondaryContactNumber && (
                  <div className='input-feedback'>
                    {errors.secondaryContactNumber}
                  </div>
                )}

              <label htmlFor='SecondaryEmail'>Email Address</label>
              <input
                type='text'
                value={values.secondaryEmail}
                name='secondaryEmail'
                id='SecondaryEmail'
                placeholder='Enter an email address'
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.secondaryEmail && touched.secondaryEmail && "error"
                }
              />
              {errors.secondaryEmail && touched.secondaryEmail && (
                <div className='input-feedback'>{errors.secondaryEmail}</div>
              )}

              <div className='segmentedControl'>
                <fieldset>
                  <legend>How would you like to play?</legend>
                  <p className="important">We now only have places for the mixed competitive tournament.  If you would like to be added to the reserves list for the women's competitive or fun tournaments please email: <a href='mailto:victoriahawkinsnetball@gmail.com' subject='Reserves request'>victoriahawkinsnetball@gmail.com</a></p>
                  <label htmlFor='isCompetitiveWomens' className="disabled">
                    <input
                      type='radio'
                      value='Competitive - Womens'
                      disabled
                      id='isCompetitiveWomens'
                      name='isCompetitive'
                      checked={
                        values.isCompetitive ===
                        "Competitive - Womens"
                      }
                      onChange={() => {
                        setFieldValue(
                          "isCompetitive",
                          "Competitive - Womens"
                        );
                        setCompetitive(true);
                        setMixedCompetitive(false);
                      }}
                    />
                    <span
                      className={
                        errors.isCompetitive && touched.isCompetitive && "error"
                      }>
                      Competitive - Womens
                    </span>
                  </label>

                  <label htmlFor='isCompetitiveMixed'>
                    <input
                      type='radio'
                      value='Competitive - Mixed'
                      id='isCompetitiveMixed'
                      name='isCompetitive'
                      checked={
                        values.isCompetitive ===
                        "Competitive - Mixed"
                      }
                      onChange={() => {
                        setFieldValue(
                          "isCompetitive",
                          "Competitive - Mixed"
                        );
                        setCompetitive(true);
                        setMixedCompetitive(true);
                      }}
                    />
                    <span
                      className={
                        errors.isCompetitive && touched.isCompetitive && "error"
                      }>
                      Competitive - Mixed
                    </span>
                  </label>

                  <label htmlFor='isCompetitiveN' className="disabled">
                    <input
                      type='radio'
                      value='Just for fun!'
                      disabled
                      id='isCompetitiveN'
                      name='isCompetitive'
                      checked={values.isCompetitive === "Just for fun!"}
                      onChange={() => {
                        setFieldValue("isCompetitive", "Just for fun!");
                        setFieldValue("umpireName", "");
                        setCompetitive(false);
                        setMixedCompetitive(false);
                      }}
                      onBlur={() => setErrors({})}
                    />
                    <span
                      className={
                        errors.isCompetitive && touched.isCompetitive && "error"
                      }>
                      Just for fun!
                    </span>
                  </label>

                  {errors.isCompetitive && touched.isCompetitive && (
                    <div className='input-feedback'>{errors.isCompetitive}</div>
                  )}
                </fieldset>

                <div class='field'>
                  <div data-netlify-recaptcha='true'></div>
                </div>
              </div>

              {mixedCompetitive && (
                <>
                  <span><b>Mixed Netball (rules)</b><br /></span>
                  <span>
                    Mixed netball has modified rules around player eligibility:
                  </span>

                  <ul className='list-unordered'>
                    <li>Mixed teams are only permitted to have a maximum of three (3) non-female players on court at any one time during a match and can only have one (1) non-female playing in the following groupings at any one time:</li>
                    <ul className='list-unordered'>
                      <li>GS and GA</li>
                      <li>WA, C and WD; and</li>
                      <li>GD and GK</li>
                    </ul>
                  </ul>
                </>
              )}

              {competitive && (
                <>
                  <label htmlFor='umpireName'>Umpire Name</label>
                  <p class='smallHelp'>
                    Each team is required to provide a C award umpire. We may be 
                    able to accept someone who is an experienced beginner who is 
                    working towards their C award but this will depend on the 
                    number of experienced umpires we have.
                  </p>

                  <p class='smallHelp'>
                    Please note, your umpiring fixtures may be at the same time
                    as your playing fixtures so please ensure you can cover
                    both.
                  </p>

                  <input
                    type='text'
                    value={values.umpireName}
                    id='umpireName'
                    name='umpireName'
                    placeholder='Enter the name of your umpire'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.umpireName && touched.umpireName && "error"
                    }
                  />
                  {errors.umpireName && touched.umpireName && (
                    <div className='input-feedback'>{errors.umpireName}</div>
                  )}
                </>
              )}

              <label htmlFor='music'>What music you would like to be played if your team gets into the play-offs?</label>
              <input
                type='text'
                value={values.music}
                id='music'
                name='music'
                placeholder='Enter a song name and artist'
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.music && touched.music && "error"}
              />
              {errors.music && touched.music && (
                <div className='input-feedback'>{errors.music}</div>
              )}

              <button
                className='btn btn-primary right'
                type='submit'
                disabled={isSubmitting}>
                Send
              </button>
            </form>
          </>
        );
      }}
    </Formik>
  );
};

export default NetlifyRegistrationForm;
