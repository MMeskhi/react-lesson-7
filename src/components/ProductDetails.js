import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { keyword } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${keyword}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [keyword]);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetails;
