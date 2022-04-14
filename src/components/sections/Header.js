import React, { Component } from 'react';

import { Link } from 'react-scroll';

import SocialsBar from './SocialsBar';

export default class Header extends Component {
  render() {
    return (
      <header id='header' className='full-height-window'>
        <div className='container'>
          <div>
            <h1>Saturday 25th June 2022</h1>
            <h2>City Academy</h2>
            <p>
              We have booked the 25th June 2022 at City Academy and plan to
              approach the day as previous years following any additional COVID
              precautions as per government guidelines at that time.
            </p>

            <p>
              If the roadmap dates change and we need to reschedule then we will
              do so with a date in September, teams will be able to keep their
              place or if the date doesn’t work can get their entry fee refunded
              if notified within 7 days of the new date being announced.
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
