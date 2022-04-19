import React, { Component } from 'react';

import {
  FaBirthdayCake,
  FaCalendarAlt,
  FaCalendarTimes,
  FaCoins,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default class Event extends Component {
  render() {
    return (
      <div id='section2' className='section two'>
        <div className='container'>
          <div className='eventAbout'>
            <h2>About the Event</h2>
            <p>
              We’ve had lots of great feedback over the years with the format
              and style of the tournament, so this year we plan to approach it
              in the same way. The day will be split into 2 sessions, places
              fill up quick so please enter your team today!
            </p>

            <h3>The Morning Session</h3>
            <span class='small'>
              Registration: 9.30am - Start: 10.00am - Finish: approx 12:30pm
            </span>

            <p>
              The morning will be a friendly but still competitive tournament
              for groups of people who maybe don’t normally play netball, but
              would like to take part. These teams can be mixed teams if you
              wish and can include up to 3 affiliated netballers in the team -
              however only 2 of these players can be on court at one time. The
              fun tournament is the highlight of the day and over the years has
              become almost more competitive than the afternoon session.
            </p>

            <h3>The Afternoon Session</h3>
            <span class='small'>
              Registration: 12:15pm - Start: 12:45pm - Finish: approx 4:15pm
            </span>

            <p>
              The afternoon session is for affiliated players, in a competitive
              tournament. If we hit our targeted no of teams then their will be
              2 groups with a semi and final to determine winners. Again we have
              enjoyed welcoming a range of teams into this session, we always
              try and group similar div teams together so that it’s a really
              enjoyable afternoon.
            </p>

            <p>
              After the success of last years BBQ, we will be doing the same again this year and including a vegetarian option. We will also have a raffle, silent auction and cake stall (including vegan options) for you to enjoy when you aren’t playing.
            </p>

            <p>
              Spectators all welcome, so please come along for a fantastic day raising money for Nelsons Journey.
            </p>
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
                  <p>25th June 2022</p>
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
                    4th June 2022
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
                  <p>£45 entry fee per team per session</p>
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
