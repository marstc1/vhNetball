import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

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
    isCompetitive: "",
  };

  const handleSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Registration", ...values }),
    })
      .then(() => {
        resetForm({});
        setStatus({ success: true });
        formSubmitHandler("true");
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
  });

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
        } = props;

        if (!!status && !!status.success) {
          return (
            <div>
              <h3 className='pad-bottom-lg'>
                Fantastic! - You have been registered
              </h3>
              <p>Just a couple of things to do before the big day ...</p>
              <ol className='pad-bottom-lg'>
                <li className='pad-bottom-sm'>
                  Please submit your entry fee of <strong>£30</strong> using our
                  <a href='http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10843969?amount=30.00&currency=GBP&reference=EF30&exitUrl=https%3A%2F%2Fvhnetball.netlify.com%2F%3FjgDonationId%3DJUSTGIVING-DONATION-ID&message=Tounament%20entry%20fee'>
                    {" Just Giving "}
                  </a>
                  page.
                </li>
                <li>
                  A deposit of <strong>£50</strong> can be sent by cheque to
                  sent to; <br />
                  <strong>
                    Lisa Price, 7 Charolais Close, Trowse, Norwich, NR14 8GD
                  </strong>
                  <br />
                  (this cheque will be returned to you at the event).
                </li>
              </ol>
              <p>Thank you – we look forward to seeing you at this event!</p>
            </div>
          );
        }

        return (
          <>
            <form
              name='Registration v1'
              autoComplete='off'
              onSubmit={handleSubmit}
              method='post'
              data-netlify='true'
              dat-netlify-honeypot='bot-field'>
              <input type='hidden' name='form-name' value='Registration v1' />
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
                  <label htmlFor='isCompetitiveY'>
                    <input
                      type='radio'
                      value='Competitive - I am playing to win!'
                      id='isCompetitiveY'
                      name='isCompetitive'
                      checked={
                        values.isCompetitive ===
                        "Competitive - I am playing to win!"
                      }
                      onChange={() =>
                        setFieldValue(
                          "isCompetitive",
                          "Competitive - I am playing to win!"
                        )
                      }
                    />
                    <span className={errors.isCompetitive && "error"}>
                      Competitively
                    </span>
                  </label>

                  <label htmlFor='isCompetitiveN'>
                    <input
                      type='radio'
                      value='Just for fun!'
                      id='isCompetitiveN'
                      name='isCompetitive'
                      checked={values.isCompetitive === "Just for fun!"}
                      onChange={() =>
                        setFieldValue("isCompetitive", "Just for fun!")
                      }
                    />
                    <span className={errors.isCompetitive && "error"}>
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
