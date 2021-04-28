import React, { Component } from "react";
import { SocialLinks } from "../SocialLinks";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <p>
            Donations gratefully received via our&nbsp;
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://uk.virginmoneygiving.com/VictoriaHawkinsNetball?amount=30.00&currency=GBP&reference=EF40&exitUrl=https%3A%2F%2Fvhnetball.netlify.com'>
              Virgin Money Giving
            </a>{" "}
            page
          </p>

          <p>
            Questions or comments? Please email&nbsp;
            <a
              href='mailto:victoriahawkinsnetball@gmail.com'
              subject='VH Netball Tournament Question'>
              victoriahawkinsnetball@gmail.com
            </a>
          </p>

          <SocialLinks />
        </div>
      </footer>
    );
  }
}
