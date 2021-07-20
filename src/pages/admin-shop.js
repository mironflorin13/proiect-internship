import React, { useState, useEffect } from "react";

import getAllProducts from "../mock-functions/get-all-products";

const AdminShop = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [allProducts, setAllProducts] = useState([]);

  const productsRequest = getProducts => {
    getProducts()
      .then(products => {
        setAllProducts(products);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(() => {
    productsRequest(getAllProducts);
  }, []);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    console.log(allProducts);
    return (
      <div className="cardsOverviewContainer">
        <div className="container">Aici vor fi produsele din shop admin</div>
      </div>
    );
  }
};

export default AdminShop;
