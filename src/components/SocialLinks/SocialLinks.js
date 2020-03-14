import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      name: "facebook",
      link: "https://www.facebook.com/mccarthynetball",
      icon: <FaFacebookSquare />
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/",
      icon: <FaInstagram />
    },
    {
      name: "twitter",
      link: "https://twitter.com/mccarthynetball?lang=en",
      icon: <FaTwitter />
    }
  ];

  return (
    <div className='social-links'>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            alt={item.name}
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'>
            <span>{item.icon}</span>
          </a>
        );
      })}
    </div>
  );
};

export { SocialLinks };
