import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import photo from "../../images/nelsons-thank-you.jpg";

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
            alt='Members of the Victoria Hawkins Netball Tournament committee being presented with a large cheque showing they have raised over £10000 for Nelsons Journey'
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
        </div>
      </div>
    );
  }
}
