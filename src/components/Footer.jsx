import React from "react";
import logo from "../assets/images/logo.svg";
import iconInstagram from "../assets/images/icon-instagram.svg";
import iconFacebook from "../assets/images/icon-facebook.svg";
import iconPinterest from "../assets/images/icon-pinterest.svg";
import iconTwitter from "../assets/images/icon-twitter.svg";

const Footer = () => {
  const link = ["About", "Careers", "Events", "Products", "Support"];
  const icon = [iconFacebook, iconTwitter, iconPinterest, iconInstagram];
  return (
    <footer>
      <div className="box-footer box1">
        <img className="logo" src={logo} alt="" />

        <div className="box_links">
          {icon.map((item, index) => (
            <a href="" key={index}>
              <img src={item} alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="box-footer box2">
        <div className="box_links">
          {link.map((item, index) => (
            <a href="" key={index}>
              {item}
            </a>
          ))}
        </div>
        <p>2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
