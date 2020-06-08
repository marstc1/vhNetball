import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../images/previous-events/photos";

const galleryContainerStyle = {
  padding: "1em",
  border: "1px solid #555",
  borderRadius: "1rem",
  marginBottom: "2rem",
};

export default class Event extends Component {
  render() {
    return (
      <div id='section2' className='section two'>
        <div className='container'>
          <h2>About the Event</h2>
          <p>
            The day is split into 2 parts – the morning session we host a fun
            tournament for teams who don’t normally play netball and fancy some
            fun whilst playing the sport that Vicky loved. In the afternoon we
            have a tournament for affiliated players/teams who play netball,
            these games are “friendly” but “competitive”.
          </p>

          <p>
            Just like previous years there will be a tombola, silent auction,
            cake stall and bouncy castle. Josh – JBC Sports Therapy will also be
            available to treat any niggles with sports massages! In addition
            there will be food &amp; drink available to purchase, 99Kits will be
            bringing along netball kit and netball trainers available for
            purchase and Kerry Lincoln will be there with her Creative Lincs
            stall throughout the tournament for friends, family and players to
            enjoy.
          </p>

          <p>
            It is a great day out for all of the family, whether you are
            playing, just watching ... or enjoying the cakes and tombola!
          </p>

          <p style={{ marginTop: "2em" }}>
            Here are some of our favourite photos from previous years.
          </p>
          <div style={galleryContainerStyle}>
            <Gallery margin={4} photos={photos} direction={"column"} />
          </div>
        </div>
      </div>
    );
  }
}
