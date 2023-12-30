import React from "react";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetails;
