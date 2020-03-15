import React, { Component } from "react";
import NetlifyRegistrationForm from "./NetlifyRegistrationForm";

export default class Registration extends Component {
  render() {
    return (
      <div id='section3' className='section three'>
        <div className='container'>
          <h2>Register</h2>
          <NetlifyRegistrationForm />
        </div>
      </div>
    );
  }
}
