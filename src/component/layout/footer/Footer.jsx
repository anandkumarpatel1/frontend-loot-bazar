import React from "react";
import "./style.css";
import playStore from "../../../assets/img/playstore.png";
import appStore from "../../../assets/img/appstore.png";

import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4> DOWNLOAD OUR APP</h4>
        <p>Download App for Android and Ios mobile phone.</p>
        <img src={playStore} alt="PlayStore" />
        <img src={appStore} alt="" />
      </div>
      <div className="midFooter">
        <h1>Ecommerce</h1>
        <p>High Quality is our first prioprity</p>
        <p>Copyrights 2022 &copy; Hello Engg</p>
      </div>
      <div className="rightFooter">
        <h4>Follow us </h4> 
        <div>
          <a href="https://www.instagram.com/babu_.patel_._/" target="_blank">
            <AiOutlineInstagram className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/mrconqureror/" target="_blank">
            <AiOutlineFacebook className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/in/uchiha-obito/" target="_blank">
            <AiOutlineLinkedin className="footer-icon" />{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
