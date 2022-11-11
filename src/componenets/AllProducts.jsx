import React from "react"
const AllProducts = ({ products }) => {
  return (
    <div className="products">
      <div className="products_images">
        <img src={products.image}  alt="" />
      </div>
      <h3>{products.title} </h3>
      <h4>{products.price} </h4>

    </div>
  );
};

export default AllProducts;
