import React from "react";
import "./details.scss";

const details = ({ store }) => {
  return (
    <div className="details-wrapper">
      <div className="details-container">
        <h5>{store.h5}</h5>
        <h1>{store.h1}</h1>
        <p>{store.p}</p>
      </div>
    </div>
  );
};

export default details;
