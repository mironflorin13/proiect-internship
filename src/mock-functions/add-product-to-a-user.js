import { PRODUCT_STATUSES } from "../data/constants";
import { getProduct } from "../data/products";
import { getUsers, setUsers } from "../data/users";

import getAvailableProducts from "./get-available-products";
import getSingleProduct from "./get-single-product";

const addProductToAUser = (userId, productId, singleProduct) => {
  const users = getUsers();
  const cost = getProduct(productId).credit;
  let canBuyProduct = true;
  const usersCopy = users.map(user => {
    if (user.id === userId) {
      canBuyProduct = user.credits >= cost;
      return {
        ...user,
        products: [
          ...user.products,
          { id: productId, status: PRODUCT_STATUSES.BOUGHT },
        ],
        credits: user.credits - cost,
      };
    }
    return user;
  });
  if (!canBuyProduct) {
    return Promise.reject("You do not have enough credit to buy this product");
  }
  setUsers(usersCopy);
  if (singleProduct) {
    return getSingleProduct(productId, userId);
  } else {
    return getAvailableProducts(userId);
  }
};

export default addProductToAUser;
