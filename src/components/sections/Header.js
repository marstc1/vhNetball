import React, { Component } from "react";
import { Link } from "react-scroll";
import SocialsBar from "./SocialsBar";

export default class Header extends Component {
  render() {
    return (
      <header id='header' className='full-height-window'>
        <div className='container'>
          <div>
            <h1>Saturday 27th June 2020</h1>
            <h2 className='pad-bottom-md'>City Academy</h2>
            <p className='pad-bottom-lg'>
              Please join us for the 6th year for our charity netball festival
              in honour of Victoria Hawkins (Davy) who passed away on the 31st
              October 2014. All money raised will be donated to Nelsons Journey,
              so please come along for a day of fun for all levels of netball.
            </p>
            <p className='pad-bottom-lg'>
              <strong>
                Closing date: 21st June – unless places filled earlier
              </strong>
            </p>
            <Link
              activeClass='active'
              to='section3'
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              className='btn btn-primary right'>
              Register Now
            </Link>
          </div>
        </div>
        <SocialsBar />
      </header>
    );
  }
}
