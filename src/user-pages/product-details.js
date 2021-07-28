import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import getSingleProduct from "../mock-functions/get-single-product";

const ProductDetails = () => {
  let { id } = useParams();
  id = Number.parseInt(id);

  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [product, setProduct] = useState({});

  const challengesRequest = () => {
    getSingleProduct(id)
      .then(product => {
        setProduct(product);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };
  useEffect(challengesRequest, [id]);

  if (isPending) {
    return (
      <div className="cards-overview-container">
        <div>Loading...</div>;
      </div>
    );
  } else if (error) {
    return (
      <div className="cards-overview-container">
        <div>{error}</div>;
      </div>
    );
  } else {
    return (
      <div className="cards-overview-container">
        <div>Product Details {product.title}</div>
      </div>
    );
  }
};

export default ProductDetails;
