import React from "react";
import "./contact.scss";
import niru from "../../../assets/img/niru.jpg";
import anand from "../../../assets/img/anand.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
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
          <a
            href="https://www.instagram.com/babu_.patel_._/"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/uchiha-obito/"
            target="_blank"
          >
            <AiFillLinkedin />{" "}
          </a>
          <a href="https://github.com/anandkumarpatel1" target="_blank">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
