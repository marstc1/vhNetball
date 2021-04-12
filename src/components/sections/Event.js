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
            We’ve had lots of great feedback over the years with the format and
            style of the tournament, so this we year plan to approach it in the
            same way.
          </p>

          <p>The day will be split into 2 sessions:</p>

          <p>
            The morning will be a friendly but still competitive tournament for
            groups of people who maybe don’t normally play netball, but would
            like to take part. These teams can be mixed teams if you wish and
            can include up to 3 affiliated netballers in the team - however only
            2 of these players can be on court at one time. The fun tournament
            is the highlight of the day and over the years has become almost
            more competitive than the afternoon session, places fill up quick so
            please enter your team today!
          </p>

          <p>
            The afternoon session is for affiliated players, in a competitive
            tournament. If we hit our targeted no of teams then their will be 2
            groups with a semi and final to determine winners. Again we have
            enjoyed welcoming a range of teams into this session, we always try
            and group similar div teams together so that it’s a really enjoyable
            afternoon and places also fill up quickly, so enter today!
          </p>

          <p>
            We will again provide food and drink options for the day, these are
            to be confirmed but we will share more as we approach the date.
            There will also be the famous raffle, tombola and cake stall for you
            to enjoy when you aren’t playing.
          </p>

          <p>
            We welcome spectators and hopefully this year will give us the
            opportunity to get everyone back together for a fantastic day
            raising money for Nelsons Journey.
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
