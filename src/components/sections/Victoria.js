import React, { Component } from "react";
import victoria from "../../images/victoria-profile.jpg";

export default class Victoria extends Component {
  render() {
    return (
      <div id='section1' className='section one'>
        <div className='container'>
          <h2>Victoria</h2>
          <img src={victoria} alt='Victoria' className='victoria' />
          <p>A little bit about Victoria ...</p>
          <p>
            The aim of this now annual netball event is to celebrate the memory
            of Victoria Hawkins, a fantastic netballer who was well known in the
            netball community for playing for McCarthy Stars and Panthers.
          </p>
          <p>
            After Vicky’s unexpected death in 2014, her friends and family
            arranged a tournament in her honor which has now developed into a
            festival of netball to enable anyone to take part in the game Vicky
            loved to play.
          </p>
          <p>
            Now in its fifth year, the netball festival will bring Victoria’s
            family and friends together to play a sport she loved to play and
            competitive teams can play a tournament in memory of a fantastic
            player. 
          </p>
          <p>
            It is hoped that the festival is well supported to raise money for
            Nelsons Journey who have been a continuous support to Victoria’s
            husband, Mark and their children Izzy and Max. Victoria who worked
            in the Accident and Emergency unit at the Norfolk and Norwich
            hospital had cardiomyopathy, [diseases of the heart muscles].  She
            had been receiving care from the hospital for her condition but had
            been given the ok apart from medication a year before her family
            holiday of a lifetime to Florida.  Unexpectedly, Victoria passed
            away on 31 October 2014 from Viral Myocarditis whilst on this
            holiday with her family.
          </p>
          <p>
            The netball festival will run as previous years with the festival
            opening with the fun but still very competitive fun tournament in
            the morning, followed by a competitive tournament in the afternoon -
            full details of entry criteria can be found in this entry pack.
          </p>
          <p>
            Just like previous years there will be a tombola, silent auction,
            cake stall and bouncy castle. Josh – JBC Sports Therapy will also be
            available to treat any niggles with sports massages! In addition
            there will be food &amp; drink available to purchase, 99Kits will be
            bringing along netball kit and netball trainers available for
            purchase and Kerry Lincoln will be there with her Creative Lincs
            stall throughout the tournament for friends, family and players to
            enjoy. In previous years its been a great day out for all of the
            family, whether you are playing or just watching…..or enjoying the
            cakes and tombola!
          </p>
        </div>
      </div>
    );
  }
}
