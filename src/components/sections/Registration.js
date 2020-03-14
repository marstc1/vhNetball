import React, { Component } from "react";

export default class Registration extends Component {
  render() {
    return (
      <div id='section3' className='section three'>
        <div className='container'>
          <h2>Register</h2>
          <form className='register-form'>
            <div className='form-group pad-bottom-lg'>
              <label htmlFor='size'>Team Name:</label>
              <input
                type='text'
                name='teamName'
                id='TeamName'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='size'>Contact Name:</label>
              <input
                type='text'
                name='contactName'
                id='ContactmName'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='size'>Contact Number:</label>
              <input
                type='text'
                name='contactNumber'
                id='ContactNumber'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group pad-bottom-lg'>
              <label htmlFor='size'>Email Address:</label>
              <input
                type='text'
                name='emailAddress'
                id='EmailAdress'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='size'>Contact Name:</label>
              <input
                type='text'
                name='secondaryContactName'
                id='SecondaryContactmName'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='size'>Contact Number:</label>
              <input
                type='text'
                name='secondaryContactNumber'
                id='SecondaryContactNumber'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group pad-bottom-lg'>
              <label htmlFor='size'>Email Address:</label>
              <input
                type='text'
                name='secondaryEmailAddress'
                id='SecondaryEmailAdress'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='funY'>Fun</label>
              <input
                type='radio'
                name='fun'
                id='funY'
                // value={minSize}
                // onChange={handleChange}
                className='size-input'
              />
              <label htmlFor='funY'>Competitive</label>
              <input
                type='radio'
                name='fun'
                id='funN'
                // value={maxSize}
                // onChange={handleChange}
                className='size-input'
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
