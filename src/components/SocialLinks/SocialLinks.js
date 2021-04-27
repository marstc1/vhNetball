import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const SocialLinks = () => {
  const socials = [
    {
      name: "McCarthy Netball Facebook Page",
      link: "https://www.facebook.com/mccarthynetball",
      icon: <FaFacebookSquare />,
    },
    {
      name: "The Victoria Hawkins Netball Instagram Page",
      link: "https://www.instagram.com/victorias_NJNetball/",
      icon: <FaInstagram />,
    },
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
            <span className='sr-only'>{item.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export { SocialLinks };
