import React from "react";
import "./contact.scss";
import niru from "../../../assets/img/niru.jpg";
import anand from "../../../assets/img/anand.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import MetaData from "../metaData/MetaData";
import group from '../../../assets/img/group.jpg'

const About = () => {
  return (
    <>
      <MetaData title={'Loot Bazar - Contact'} />

      <div className="contact">
        <div>
          <img src={niru} alt={niru} />
          <p>Niranjan Kumar</p>
          <p>Pursing B.tech from (BCE)</p>
          <p>Code debugger</p>
          <div>
            <a
              href="https://www.instagram.com/sinha_niranjankumar/"
              target="_blank"
            >
              {" "}
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/niranjan-kumar-015675238/"
              target="_blank"
            >
              <AiFillLinkedin />{" "}
            </a>
            <a href="https://github.com/sinha-niranjan" target="_blank">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
        <div>
          <img src={anand} alt={niru} />
          <p>Anand Kumar</p>
          <p>Pursing Dimploma from Govt. Poly. Gaya</p>
          <p>Full stack developer</p>
          <div>
            <a href="https://www.instagram.com/babu_.patel_._/" target="_blank">
              <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/uchiha-obito/" target="_blank">
              <AiFillLinkedin />{" "}
            </a>
            <a href="https://github.com/anandkumarpatel1" target="_blank">
              <AiOutlineGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="group">
        <img src={group} alt={group} />
        <p>Our Team Members</p>
        <ul>
          <li>Anand</li>
          <li>Anurag</li>
          <li>Sandeep</li>
          <li>Aman</li>
          <li>Ritesh</li>
          <li>Pawan</li>
          <li>Amarjeet</li>
          <li>Gautam</li>
        </ul>
      </div>
    </>
  );
};

export default About;
