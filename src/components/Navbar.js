import React from "react";
import { Link } from "react-scroll";
import logo from "../images/butterfly-logo.png";

export default function Navbar() {
  const offsetHeight = -15;
  const displayNavLinks = true;

  return (
    <nav className='navbar transparent'>
      <div className='container'>
        <Link
          id='logo'
          activeClass='active'
          to='header'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          <img src={logo} alt='Butterfly' />
          <span>The Victoria Hawkins Netball Tournament</span>
        </Link>

        {displayNavLinks && (
          <ul className='menu'>
            <li>
              <Link
                activeClass='active'
                to='section2'
                spy={true}
                smooth={true}
                offset={offsetHeight}
                duration={500}>
                Event Info
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='sectionPreviousEvents'
                spy={true}
                smooth={true}
                offset={offsetHeight}
                duration={500}>
                Previous Events
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='sectionSponsors'
                spy={true}
                smooth={true}
                offset={offsetHeight}
                duration={500}>
                Sponsors
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='section3'
                spy={true}
                smooth={true}
                offset={offsetHeight}
                duration={500}>
                Register
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='section1'
                spy={true}
                smooth={true}
                offset={offsetHeight}
                duration={500}>
                Victoria
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
