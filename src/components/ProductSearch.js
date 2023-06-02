import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ProductSearch = () => {
  const [productId, setProductId] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    history.push(`/product/${productId}`);
  };

  return (
    <div>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ProductSearch;
