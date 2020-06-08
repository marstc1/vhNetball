import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "../../images/previous-events/photos";

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
          <div style={{ marginBottom: "2em" }}>
            <Gallery margin={4} photos={photos} direction={"column"} />
          </div>
        </div>
      </div>
    );
  }
}
