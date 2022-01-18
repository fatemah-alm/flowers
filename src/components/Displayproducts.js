import React from "react";
import ProductsList from "./ProductsList";
import Products from "./Products";

const Displayproducts = () => {
  return (
    <div className="container">
      {Products.map((product) => (
        <ProductsList props={product} />
      ))}
    </div>
  );
};

export default Displayproducts;
