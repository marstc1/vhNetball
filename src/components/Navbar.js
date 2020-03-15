import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/butterfly-logo.png";

export default function Navbar() {
  const isTransparent = useState("isTransparent");
  console.log(isTransparent);
  const offsetHeight = -90;

  return (
    <nav className={isTransparent ? "navbar transparent" : "navbar"}>
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

        <ul className='menu'>
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
          <li>
            <Link
              activeClass='active'
              to='section2'
              spy={true}
              smooth={true}
              offset={offsetHeight}
              duration={500}>
              Event Information
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
        </ul>
      </div>
    </nav>
  );
}
