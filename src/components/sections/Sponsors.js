import React, { Component } from 'react';
import sjpLogo from "../../images/SJP_Logo_RGB_NAVY.svg";

export default class Sponsors extends Component {
  render() {
    return (
      <div id='sectionSponsors' className='section sponsors'>
        <div className='container'>
          <h2>Sponsors</h2>
          <div style={{width: "100%", textAlign: "center"}}>
            <a
              href='https://www.sjp.co.uk/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={sjpLogo} alt="St. James's Place" height='150px' />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
