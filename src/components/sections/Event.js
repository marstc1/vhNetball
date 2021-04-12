import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import {
  FaBirthdayCake,
  FaCalendarAlt,
  FaCalendarTimes,
  FaMapMarkerAlt,
  FaCoins,
} from "react-icons/fa";

const galleryContainerStyle = {
  padding: "1em",
  border: "1px solid #555",
  borderRadius: "1rem",
  marginBottom: "2rem",
};

const images = [
  {
    original: "/images/previousEvents/1.jpg",
    thumbnail: "/images/previousEvents/1.jpg",
  },
  {
    original: "/images/previousEvents/2.jpg",
    thumbnail: "/images/previousEvents/2.jpg",
  },
  {
    original: "/images/previousEvents/3.jpg",
    thumbnail: "/images/previousEvents/3.jpg",
  },
  {
    original: "/images/previousEvents/4.jpg",
    thumbnail: "/images/previousEvents/4.jpg",
  },
  {
    original: "/images/previousEvents/5.jpg",
    thumbnail: "/images/previousEvents/5.jpg",
  },
  {
    original: "/images/previousEvents/6.jpg",
    thumbnail: "/images/previousEvents/6.jpg",
  },
  {
    original: "/images/previousEvents/1.jpg",
    thumbnail: "/images/previousEvents/1.jpg",
  },
  {
    original: "/images/previousEvents/2.jpg",
    thumbnail: "/images/previousEvents/2.jpg",
  },
  {
    original: "/images/previousEvents/3.jpg",
    thumbnail: "/images/previousEvents/3.jpg",
  },
  {
    original: "/images/previousEvents/4.jpg",
    thumbnail: "/images/previousEvents/4.jpg",
  },
  {
    original: "/images/previousEvents/5.jpg",
    thumbnail: "/images/previousEvents/5.jpg",
  },
  {
    original: "/images/previousEvents/6.jpg",
    thumbnail: "/images/previousEvents/6.jpg",
  },
];

export default class Event extends Component {
  render() {
    return (
      <div id='section2' className='section two'>
        <div className='container'>
          <div className='eventAbout'>
            <h2>About the Event</h2>
            <p>
              We’ve had lots of great feedback over the years with the format
              and style of the tournament, so this we year plan to approach it
              in the same way.
            </p>

            <p>The day will be split into 2 sessions:</p>

            <p>
              The morning will be a friendly but still competitive tournament
              for groups of people who maybe don’t normally play netball, but
              would like to take part. These teams can be mixed teams if you
              wish and can include up to 3 affiliated netballers in the team -
              however only 2 of these players can be on court at one time. The
              fun tournament is the highlight of the day and over the years has
              become almost more competitive than the afternoon session, places
              fill up quick so please enter your team today!
            </p>

            <p>
              The afternoon session is for affiliated players, in a competitive
              tournament. If we hit our targeted no of teams then their will be
              2 groups with a semi and final to determine winners. Again we have
              enjoyed welcoming a range of teams into this session, we always
              try and group similar div teams together so that it’s a really
              enjoyable afternoon and places also fill up quickly, so enter
              today!
            </p>

            <p>
              We will again provide food and drink options for the day, these
              are to be confirmed but we will share more as we approach the
              date. There will also be the famous raffle, tombola and cake stall
              for you to enjoy when you aren’t playing.
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
              <ImageGallery
                autoPlay
                showPlayButton={false}
                slideInterval={5000}
                infinite
                lazyLoad
                items={images}
              />
            </div>
          </div>

          <h2 className='mobileOnly'>Key Information</h2>
          <div className='eventInfo'>
            <h2 className='desktopOnly'>Key Information</h2>

            <ul>
              <li>
                <div className='icon'>
                  <span>
                    <FaCalendarAlt />
                  </span>
                </div>
                <div className='listItem'>
                  <h3>Date</h3>
                  <p>17th July 2021</p>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <span>
                    <FaCalendarTimes />
                  </span>
                </div>
                <div className='listItem'>
                  <h3>Closing Date</h3>
                  <p>
                    11th July 2021
                    <br /> unless places filled earlier
                  </p>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                </div>
                <div className='listItem'>
                  <h3>Location</h3>
                  <p>City Academy, Norwich, NR4 7LP</p>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <span>
                    <FaCoins />
                  </span>
                </div>
                <div className='listItem'>
                  <h3>Cost</h3>
                  <p>
                    £30 entry fee per tournament
                    <br /> £50 deposit per team
                  </p>
                </div>
              </li>
              <li>
                <div className='icon'>
                  <span>
                    <FaBirthdayCake />
                  </span>
                </div>
                <div className='listItem'>
                  <h3>Minimum Age</h3>
                  <p>All players must be at least 14 years old</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
