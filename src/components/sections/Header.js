import React, { Component } from 'react';

import { Link } from 'react-scroll';

import SocialsBar from './SocialsBar';

export default class Header extends Component {
  render() {
    return (
      <header id='header' className='full-height-window'>
        <div className='container'>
          <div>
            <h1>Saturday 29th June 2024</h1>
            <h2>City Academy</h2>
            <p>
              We look forward to welcoming everyone to this year's netball tournament, to be held on Saturday 24th June 2024 at City Academy.
            </p>
            <p>
              After a really successful tournament in 2023, we will once again be offering a mixed competitive tournament in the afternoon, that will run alongside the usual womens competitive tournament. Full details in the About the event section along with the rules for the mixed tournament.
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
