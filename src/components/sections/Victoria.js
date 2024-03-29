import React, { Component } from "react";
import victoria from "../../images/victoria-profile.jpg";

export default class Victoria extends Component {
  render() {
    return (
      <div id='section1' className='section one'>
        <div className='container'>
          <h2 style={{ textAlign: "left" }}>A little bit about Victoria ...</h2>
          <img src={victoria} alt='Victoria' className='victoria' />
          <p>
            Victoria worked in the Accident and Emergency unit at the Norfolk
            and Norwich hospital and was diagnosed with cardiomyopathy,
            [diseases of the heart muscles]. She had been receiving care from
            the hospital for her condition for many years but had been given the
            ok apart from medication a year before her family holiday of a
            lifetime to Florida. Unexpectedly, Victoria passed away on 31
            October 2014 from Viral Myocarditis whilst on this holiday with her
            family.
          </p>
          <p>
            After Vicky’s unexpected death in 2014, I decided to arrange a
            netball tournament in her memory, I had no idea how well received it
            would be and love the fact that over the years I now get people
            contacting me to ask when they can enter - often before I have even
            started planning!
          </p>
          <p>
            The aim of our annual netball tournament is to celebrate the memory
            of Victoria Hawkins, a fantastic netballer who was well known in the
            netball community for playing for McCarthy Stars and Panthers. The
            tournament also gives us an opportunity to raise lots of money for
            Nelsons Journey a local charity which is very close to our hearts.
          </p>
          <p>
            Nelsons Journey have been a continuous support to Victoria’s
            husband, Mark and their children Izzy and Max. The services they
            offer are incredible and I’ve known of so many friends and family
            who have received help, advice and made use of the services they
            provide. It’s a great honour to be able to help this local charity
            and have them take part in our day.
          </p>
          <p>We hope you will be able to join us on the day.</p>
        </div>
      </div>
    );
  }
}
