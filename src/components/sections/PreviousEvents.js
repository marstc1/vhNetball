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
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2.jpg",
    thumbnail: "/images/previousEvents/2_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/3.jpg",
    thumbnail: "/images/previousEvents/3_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/4.jpg",
    thumbnail: "/images/previousEvents/4_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_1.jpg",
    thumbnail: "/images/previousEvents/2018_1_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_2.jpg",
    thumbnail: "/images/previousEvents/2018_2_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_3.jpg",
    thumbnail: "/images/previousEvents/2018_3_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_4.jpg",
    thumbnail: "/images/previousEvents/2018_4_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_5.jpg",
    thumbnail: "/images/previousEvents/2018_5_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_6.jpg",
    thumbnail: "/images/previousEvents/2018_6_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_7.jpg",
    thumbnail: "/images/previousEvents/2018_7_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2018_8.jpg",
    thumbnail: "/images/previousEvents/2018_8_small.jpg",
    originalAlt: "Highlights from our 2018 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2018 event",
  },
  {
    original: "/images/previousEvents/2019_1.jpg",
    thumbnail: "/images/previousEvents/2019_1_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_2.jpg",
    thumbnail: "/images/previousEvents/2019_2_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_3.jpg",
    thumbnail: "/images/previousEvents/2019_3_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_4.jpg",
    thumbnail: "/images/previousEvents/2019_4_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_5.jpg",
    thumbnail: "/images/previousEvents/2019_5_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_6.jpg",
    thumbnail: "/images/previousEvents/2019_6_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_7.jpg",
    thumbnail: "/images/previousEvents/2019_7_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_8.jpg",
    thumbnail: "/images/previousEvents/2019_8_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_9.jpg",
    thumbnail: "/images/previousEvents/2019_9_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_10.jpg",
    thumbnail: "/images/previousEvents/2019_10_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_11.jpg",
    thumbnail: "/images/previousEvents/2019_11_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_12.jpg",
    thumbnail: "/images/previousEvents/2019_12_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
  {
    original: "/images/previousEvents/2019_13.jpg",
    thumbnail: "/images/previousEvents/2019_13_small.jpg",
    originalAlt: "Highlights from our 2019 event",
    thumbnailAlt: "Thumbnail - Highlights from our 2019 event",
  },
];

export default class PreviousEvents extends Component {
  render() {
    return (
      <div id='sectionPreviousEvents' className='section sectionPreviousEvents'>
        <div className='container'>
          <h2>Previous Events</h2>
          <h3>Following last year's tournament, we brought our grand total raised for Nelson's Journey to £20,050.34!!!!</h3>
          <img
            className='thankYouPhoto'
            src={photo}
            alt='Members of the Victoria Hawkins Netball Tournament committee being presented with a thank you for raising over £10000 for Nelsons Journey'
          />
          <p>
            We’ve spent the last 8 years raising money for Nelson’s Journey. When Covid prevented us holding the tournament in 2020 Lisa raised money through running her first marathon and Charlotte and Mark completed the Broads Walk challenge in 2021 to further increase the pot.
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
            alt='Lisa Price (left) running a marathon with Julz Williams (right)'
            className='thankYouPhoto'
          />
          <p>
            2020 was a tough year for everyone, with us all doing our bit to
            fight back against the spread of Coronavirus. The vital government
            restrictions that were in place at the time, meant that we were
            unable to host the tournament. At a time when a charity like
            Nelson's Journey needed vital fundraising the most our usual
            contribution from the tournament was put on hold meaning we couldn't
            raise money for them.....or did it?!
          </p>

          <p>
            Lisa Price (Victoria Hawkins memorial Netball tournament organiser)
            had been running throughout the pandemic to support her own
            wellbeing, deciding to embark on her biggest running challenge yet
            having completed a number of half marathons previously she decided
            to begin training for a marathon. As the 16 week plan progressed, it
            became clear how much grit and determination would be needed to run
            the distance when no organised events were taking place. So she
            decided along with the amazing support of her best friend Julz
            Williams to share her plans to keep her motivated and in the process
            commit to raising funds for Nelson's Journey.
          </p>

          <p>
            Together they plotted a 26.2 mile route around Norwich which they
            completed on the 13th November raising a fabulous £2275 for Nelsons
            Journey.
          </p>
        </div>
      </div>
    );
  }
}
