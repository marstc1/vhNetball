import React, { Component } from "react";
import SocialsBar from "./SocialsBar";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <header id='header' className='full-height-window'>
        <div className='container'>
          <div>
            <h1>Saturday 17th July 2021</h1>
            <h2>City Academy</h2>
            <p>
              We are really excited to be planning a tournament this year and
              really hope that after a year of limited to no netball you are all
              equally excited. At present the roadmap to return to netball shows
              that no earlier than 21st June that tournaments can resume so with
              everything crossed we will be in a position to host the tournament
              this year.
            </p>

            <p>
              We have booked the 17th July 2021 at City Academy and plan to
              approach the day as previous years following any additional COVID
              precautions as per government guidelines at that time.
            </p>

            <p>
              If the roadmap dates change and we need to reschedule then we will
              do so with a date in September, teams will be able to keep their
              place or if the date doesn’t work can get their deposit refunded.
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
