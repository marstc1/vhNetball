import React, { Component } from "react";
import { SocialLinks } from "../SocialLinks";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <p>
            Questions or comments? Please email&nbsp;
            <a
              href='mailto:lisajane0303@gmail.com'
              subject='VH Netball Tournament Question'>
              lisajane0303@gmail.com
            </a>
          </p>
          <SocialLinks />
        </div>
      </footer>
    );
  }
}
