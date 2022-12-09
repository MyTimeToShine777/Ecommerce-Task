import React from "react";
import Card from "react-bootstrap/Card";
import "./card.scss";

const Cards = ({ item }) => {
  return (
    <div className="container">
      <Card>
        <img src={item.img} alt="" style={{ objectFit: "fill" }} />
      </Card>
      <div className="data">
        <h1>{item.h1}</h1>
        <p>{item.p}</p>
      </div>
    </div>
  );
};

export default Cards;
