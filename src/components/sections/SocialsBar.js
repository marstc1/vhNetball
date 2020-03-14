import React from "react";
import mccarthysLogo from "../../images/mccarthys-logo.png";
import { SocialLinks } from "../SocialLinks";

export default function SocialsBar() {
  return (
    <div id='Socials' className='section socials'>
      <img src={mccarthysLogo} alt='McCarthys' className='mcarthys-logo' />

      <SocialLinks />
    </div>
  );
}
