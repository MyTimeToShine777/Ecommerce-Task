import React from "react";
import Card from "react-bootstrap/Card";
import "./productcard.scss";

const ProductCards = ({ item }) => {
  return (
    <div className="container">
      <Card style={{ width: "400px", height: "300px" }}>
        <img
          src={item.img}
          alt=""
          style={{ height: "300px", objectFit: "fill" }}
        />
      </Card>
      <div className="data">
        <h5>{item.h5}</h5>
        <p>{item.p}</p>
      </div>
      <div className="icons"></div>
    </div>
  );
};

export default ProductCards;
