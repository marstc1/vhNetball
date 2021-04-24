import React, { Component } from "react";
import victoria from "../../images/victoria-profile.jpg";
import marathon from "../../images/marathon.jpg";

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
          <p>
            Although we couldn’t hold the tournament last year due to COVID we
            hope that this year we will reunite players and teams who both knew
            Victoria or want to help us celebrate the memory of a fantastic
            player throughout this special day. Every year we set new targets of
            the amount we would love to raise for Nelson’s Journey, in September
            2019 Mark and I were honoured to receive a huge thank you from
            Nelsons Journey for hitting the £10,000 raised since the tournament
            began in 2015.
          </p>
          <p>
            Last year as we couldn’t hold the tournament I raised money by
            running my first ever marathon, adding another £2275 to our grand
            total over the years. We really hope that this year we can raise
            further much needed funds for such an amazing cause.
          </p>
          <img
            src={marathon}
            alt='Lisa running a marathon'
            style={{ width: "100%" }}
          />
          <p>We hope you will be able to join us on the day.</p>
        </div>
      </div>
    );
  }
}
