import React, { Component } from 'react';
import sjpLogo from "../../images/SJP_Logo_RGB_NAVY.svg";
import flyhawkLogo from "../../images/flyhawk.png";

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

          <div style={{width: "100%", textAlign: "center", marginTop: "2em", paddingTop: "1em", backgroundColor: "white", border: "1px solid gray"}}>
            <a
              href='https://flyhawk.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <img src={flyhawkLogo} alt="Flyhawk" width="100%" style={{maxWidth: "350px"}} />
            </a>
            <p><small><b>Official Tournament Ball Supplier.</b></small></p>
          </div>
        </div>
      </div>
    );
  }
}
