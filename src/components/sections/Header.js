import React, { Component } from 'react';

import { Link } from 'react-scroll';

import SocialsBar from './SocialsBar';

export default class Header extends Component {
  render() {
    return (
      <header id='header' className='full-height-window'>
        <div className='container'>
          <div>
            <h1>Saturday 24th June 2023</h1>
            <h2>City Academy</h2>
            <p>
              We look forward to welcoming everyone to this year's netball tournament, to be held on Saturday 24th June 2023 at City Academy.
            </p>
            <p>
              This year we are really excited to announce the addition of the mixed competitive tournament that will run alongside the usual competitive tournament in the afternoon session. Full details in the About the event section along with rules for the mixed competitive tournament.
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
