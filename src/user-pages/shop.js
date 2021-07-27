import React, { useState, useEffect } from "react";

import getAvailableProducts from "../mock-functions/get-available-products";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import ShopCard from "../components/shop-card/shop-card";

const Shop = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();
  const [availableProducts, setAvailableProducts] = useState([]);

  const productsRequest = getProducts => {
    getProducts()
      .then(products => {
        setAvailableProducts(products);
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  };

  useEffect(() => {
    productsRequest(() => getAvailableProducts(userId));
  }, [userId]);

  if (isPending) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="cards-overview-container">
        <div className="challenges-container">
          <ChallengesSection title="Shop">
            {availableProducts.length ? (
              availableProducts.map(product => (
                <ShopCard {...product} key={product.id}>
                  <Button
                    type="btn primary flex-width-max"
                    value={`Buy - ${product.credit} Credits`}
                  />
                </ShopCard>
              ))
            ) : (
              <h2 className="challenges-subtilte">No Products to display</h2>
            )}
          </ChallengesSection>
        </div>
      </div>
    );
  }
};

export default Shop;
