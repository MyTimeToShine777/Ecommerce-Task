import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./header.scss";
const NHeader = () => {
  return (
    <div className="wrapper-header">
      <div className="left-container">
        <h1 className="logo">#1 FURNITURE SHOP IN PONDICHERRY</h1>
      </div>
      <div className="right-container">
        <div className="icon-container">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
        </div>
        <div className="contact-container">
          <div className="line"></div>
          <p className="contact" style={{ marginBottom: "0" }}>
            CONTACT US
          </p>
          <div className="line"></div>
          <p className="faq" style={{ marginBottom: "0" }}>
            FAQ'S
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default NHeader;
