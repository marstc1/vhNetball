import React, { Component } from "react";
import SocialsBar from "./SocialsBar";
import { Link } from "react-scroll";

export default class Header extends Component {
  render() {
    return (
      <header id='header' className='full-height-window'>
        <div className='container'>
          <div>
            <h2>Event Cancelled</h2>
            <p>
              For the past 5 consecutive years we have held an annual netball
              tournament to honour our friend and team mate{" "}
              <Link
                to='section1'
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}>
                Victoria Hawkins
              </Link>{" "}
              who passed away unexpectedly in 2014.
            </p>

            <p>
              Due to so much uncertainty around when it will be safe to organise
              a large event, it is with a heavy heart that we have made the
              sensible decision to postpone until 2021, when we will be back
              even stronger than before.
            </p>

            <p>
              If you would still like to donate to Nelson's Journey, a local
              charity that supports bereaved children and young people in
              Norfolk, then you can still do this via our{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10843969?amount=15.00&currency=GBP&reference=EF30&exitUrl=https%3A%2F%2Fvhnetball.netlify.com%2F%3FjgDonationId%3DJUSTGIVING-DONATION-ID&message=Tounament%20entry%20fee'>
                Just Giving
              </a>{" "}
              page.
            </p>

            <a
              className='btn btn-primary right'
              target='_blank'
              rel='noopener noreferrer'
              href='http://link.justgiving.com/v1/fundraisingpage/donate/pageId/10843969?amount=15.00&currency=GBP&reference=EF30&exitUrl=https%3A%2F%2Fvhnetball.netlify.com%2F%3FjgDonationId%3DJUSTGIVING-DONATION-ID&message=Tounament%20entry%20fee'>
              Donate
            </a>
          </div>
        </div>
        <SocialsBar />
      </header>
    );
  }
}
