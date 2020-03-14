import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const NetlifyRegistrationForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const contactNumberValidation = Yup.string()
    .required("Please enter a contact number")
    .matches(
      /(^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$)/,
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
    isCompetitive: ""
  };

  const handleSubmit = (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Registration", ...values })
    })
      .then(() => {
        resetForm({});
        setStatus({ success: true });
        console.log("Success");
      })
      .catch(error => {
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
    email: Yup.string()
      .email()
      .required("Please enter an email"),
    secondaryContactName: Yup.string().required("Please enter a contact name"),
    secondaryContactNumber: contactNumberValidation,
    secondaryEmail: Yup.string()
      .email()
      .required("Please enter an email"),
    isCompetitive: Yup.string().required("Please select an option")
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      {props => {
        const {
          values,
          touched,
          status,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue
        } = props;

        if (!!status && !!status.success) {
          return (
            <div>
              <h3>Fantastic!</h3>
              <p>You are all registered for the event.</p>
              <p>
                Please submit your entry fee of £30 using our
                <a href='http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10843969?amount=30.00&currency=GBP&reference=EF30&exitUrl=https%3A%2F%2Fvhnetball.netlify.com%2F%3FjgDonationId%3DJUSTGIVING-DONATION-ID&message=Tounament%20entry%20fee'>
                  {" Just Giving "}
                </a>
                page
              </p>
              <p>
                A deposit of £50 can be sent by cheque to the following address,
                this will be returned to you at the event.
              </p>
              <p>Lisa Price, 7 Charolais Close, Trowse, Norwich, NR14 8GD</p>
            </div>
          );
        }

        return (
          <form autoComplete='off' onSubmit={handleSubmit}>
            <label htmlFor='teamName'>Team Name</label>
            <input
              type='text'
              value={values.teamName}
              name='teamName'
              placeholder='Enter your team name'
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.teamName && touched.teamName && "error"}
            />
            {errors.teamName && touched.teamName && (
              <div className='input-feedback'>{errors.teamName}</div>
            )}

            <label htmlFor='contactName'>Contact Name</label>
            <input
              type='text'
              value={values.contactName}
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
              name='email'
              placeholder='Enter your email address'
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className='input-feedback'>{errors.email}</div>
            )}

            <label htmlFor='secondaryContactName'>Contact Name</label>
            <input
              type='text'
              value={values.secondaryContactName}
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

            <label htmlFor='secondaryEmail'>Email Address</label>
            <input
              type='text'
              value={values.secondaryEmail}
              name='secondaryEmail'
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
              <p>How would you like to play?</p>
              <label htmlFor='isCompetitiveY'>
                <input
                  type='radio'
                  value='Competitive - I am playing to win!'
                  name='isCompetitive'
                  id='isCompetitiveY'
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
                <span>Competitive</span>
              </label>

              <label htmlFor='isCompetitiveN'>
                <input
                  type='radio'
                  value='Just for fun!'
                  name='isCompetitive'
                  id='isCompetitiveN'
                  checked={values.isCompetitive === "Just for fun!"}
                  onChange={() =>
                    setFieldValue("isCompetitive", "Just for fun!")
                  }
                />
                <span>Fun</span>
              </label>

              {errors.isCompetitive && touched.isCompetitive && (
                <div className='input-feedback'>{errors.isCompetitive}</div>
              )}
            </div>

            <button type='submit' disabled={isSubmitting}>
              Send
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default NetlifyRegistrationForm;
