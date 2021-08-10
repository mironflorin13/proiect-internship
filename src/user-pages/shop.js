import React, { useState, useEffect, useContext } from "react";

import { Context } from "../context/context-provider";
import getAvailableProducts from "../mock-functions/get-available-products";
import ChallengesSection from "../components/challenges-section/challenges-section";
import Button from "../components/button/button";
import ShopCard from "../components/shop-card/shop-card";
import addProductToAUser from "../mock-functions/add-product-to-a-user";
import { ROLES_STATUSES } from "../data/constants";

const Shop = ({ userId }) => {
  const [isPending, setIsPending] = useState(true);

  const [availableProducts, setAvailableProducts] = useState([]);
  const { updateUserData, setRoleType } = useContext(Context);

  const productsRequest = getProducts => {
    getProducts()
      .then(products => {
        setAvailableProducts(products);
        setIsPending(false);
      })
      .catch(error => {
        alert(error);
        setIsPending(false);
      });
  };

  const buyProduct = productId => async () => {
    await productsRequest(() => addProductToAUser(userId, productId, false));
    updateUserData();
  };

  useEffect(() => {
    setRoleType(ROLES_STATUSES.USER);
    productsRequest(() => getAvailableProducts(userId));
  }, [userId, setRoleType]);

  if (isPending) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="challenges-container">
        <ChallengesSection title="Shop">
          {availableProducts.length ? (
            availableProducts.map(product => (
              <ShopCard {...product} key={product.id}>
                <Button
                  type="btn primary flex-width-max"
                  value={`Buy - ${product.credit} Credits`}
                  handleOnClick={buyProduct(product.id)}
                />
              </ShopCard>
            ))
          ) : (
            <h2 className="challenges-subtilte">No Products to display</h2>
          )}
        </ChallengesSection>
      </div>
    );
  }
};

export default Shop;
