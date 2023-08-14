import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import MetaData from "../metaData/MetaData";
const Contact = () => {
  return (
    <>
      <MetaData title="Loot Bazar - Contact" />
      <div className="contactContainer">
        <a className="mailBtn" href="mailto:helloengg.420@gmail.com">
          <Button>Contact: helloengg.420@gmail.com</Button>
        </a>
      </div>
    </>
  );
};

export default Contact;
