import React from "react";

const ProductsList = ({ props }) => {
  return (
    <div className="theItem">
      <img className="products" src={props.image} alt="product 1" />
      <h3>{props.name}</h3>
      <p>{props.price} KD</p>
    </div>
  );
};

export default ProductsList;
