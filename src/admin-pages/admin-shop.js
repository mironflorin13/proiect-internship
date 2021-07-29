import React, { useState, useEffect } from "react";

import getAllProducts from "../mock-functions/get-all-products";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import ShopCard from "../components/shop-card/shop-card";

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
    return (
      <div className="challenges-container">
        <ChallengesSection title="Shop">
          <>
            {allProducts.length ? (
              allProducts.map(product => (
                <ShopCard {...product} key={product.id}>
                  <Button type="btn secondary " value="Delete" />
                  <Button type="btn primary flex-width-max" value="Edit" />
                </ShopCard>
              ))
            ) : (
              <h2 className="challenges-subtilte">No Products to display</h2>
            )}
            <Button type="btn primary fix" value="Add New" />
          </>
        </ChallengesSection>
      </div>
    );
  }
};

export default AdminShop;
