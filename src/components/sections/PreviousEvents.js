import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import photo from "../../images/nelsons-thank-you.jpg";
import marathon from "../../images/marathon.jpg";

const galleryContainerStyle = {
  padding: "1em",
  border: "1px solid #555",
  borderRadius: "1rem",
  marginBottom: "2rem",
};

const images = [
  {
    original: "/images/previousEvents/1.jpg",
    thumbnail: "/images/previousEvents/1_small.jpg",
  },
  {
    original: "/images/previousEvents/2.jpg",
    thumbnail: "/images/previousEvents/2_small.jpg",
  },
  {
    original: "/images/previousEvents/3.jpg",
    thumbnail: "/images/previousEvents/3_small.jpg",
  },
  {
    original: "/images/previousEvents/4.jpg",
    thumbnail: "/images/previousEvents/4_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_1.jpg",
    thumbnail: "/images/previousEvents/2018_1_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_2.jpg",
    thumbnail: "/images/previousEvents/2018_2_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_3.jpg",
    thumbnail: "/images/previousEvents/2018_3_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_4.jpg",
    thumbnail: "/images/previousEvents/2018_4_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_5.jpg",
    thumbnail: "/images/previousEvents/2018_5_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_6.jpg",
    thumbnail: "/images/previousEvents/2018_6_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_7.jpg",
    thumbnail: "/images/previousEvents/2018_7_small.jpg",
  },
  {
    original: "/images/previousEvents/2018_8.jpg",
    thumbnail: "/images/previousEvents/2018_8_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_1.jpg",
    thumbnail: "/images/previousEvents/2019_1_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_2.jpg",
    thumbnail: "/images/previousEvents/2019_2_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_3.jpg",
    thumbnail: "/images/previousEvents/2019_3_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_4.jpg",
    thumbnail: "/images/previousEvents/2019_4_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_5.jpg",
    thumbnail: "/images/previousEvents/2019_5_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_6.jpg",
    thumbnail: "/images/previousEvents/2019_6_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_7.jpg",
    thumbnail: "/images/previousEvents/2019_7_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_8.jpg",
    thumbnail: "/images/previousEvents/2019_8_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_9.jpg",
    thumbnail: "/images/previousEvents/2019_9_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_10.jpg",
    thumbnail: "/images/previousEvents/2019_10_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_11.jpg",
    thumbnail: "/images/previousEvents/2019_11_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_12.jpg",
    thumbnail: "/images/previousEvents/2019_12_small.jpg",
  },
  {
    original: "/images/previousEvents/2019_13.jpg",
    thumbnail: "/images/previousEvents/2019_13_small.jpg",
  },
];

export default class PreviousEvents extends Component {
  render() {
    return (
      <div id='sectionPreviousEvents' className='section sectionPreviousEvents'>
        <div className='container'>
          <h2>Previous Events</h2>
          <h3>We have raised over £10,000 for NELSON’S JOURNEY</h3>
          <img
            className='thankYouPhoto'
            src={photo}
            alt='Members of the Victoria Hawkins Netball Tournament committee being presented with a thank you for raising over £10000 for Nelsons Journey'
          />
          <p>
            Our previous tournaments, as well as other fund raising activities
            have helped us raise over £10000 for the fantastic Nelsons Journey.
          </p>
          <p>
            This money will help Nelsons Journey support the hundreds of
            children and young people in Norfolk who’ve experienced the death of
            a significant person, helping them to move forward positively with
            their lives.
          </p>
          <p>
            It is an amazing amount raised for such a fantastic charity very
            close to our hearts. We would just like to say a massive thank you
            to everyone who has helped us over the years, we could not have done
            this without your support.
          </p>
          <h3>Gallery</h3>
          <p>
            Here are some photos of the absolute legends that have helped us
            raise this money from previous years.
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
          <h3>The Marathon</h3>
          <img
            src={marathon}
            alt='Lisa running a marathon with Julz Williams'
            className='thankYouPhoto'
          />
          <p>
            2020 was a tough year for us all, we all done our bit to help fight
            the fight against the spread of the coronavirus. The vital
            government restrictions that were in place at the time meant that we
            were unable to hold our tournament.
          </p>

          <p>
            We were obviously disappointed however this was absolutely the right
            thing to do at the time to ensure the safety of all involved,
            however no tournament also meant that we were unable to raise money
            for Nelsons Journey ... or did it?
          </p>

          <p>
            Lisa Price (Victoria Hawkins Netball Tournament Organiser) had a
            think, ‘what else could we do instead to help raise money for
            Nelsons Journey? ... hmmm, I know .. I will run a marathon!’ ... her
            first ever marathon!
          </p>

          <p>
            Supported by her friend Julz Williams, they plotted a 26.2 mile
            route around Norwich which they completed on the 13th November
            raising a fabulous £2275 for Nelsons Journey.
          </p>
        </div>
      </div>
    );
  }
}
