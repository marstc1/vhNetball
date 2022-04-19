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
              We look forward to welcoming everyone to this years netball tournament, to be held on Saturday 25th June 2022 at City Academy.
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
