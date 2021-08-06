import { PRODUCT_STATUSES } from "../data/constants";
import { getProduct } from "../data/products";
import { getUsers, setUsers } from "../data/users";

import getAvailableProducts from "./get-available-products";
import getSingleProduct from "./get-single-product";

const addProductToAUser = (userId, productId, singleProduct) => {
  const users = getUsers();
  const cost = getProduct(productId).credit;

  const usersCopy = users.map(user => {
    if (user.id === userId) {
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

  setUsers(usersCopy);
  if (singleProduct) {
    return getSingleProduct(productId, userId);
  } else {
    return getAvailableProducts(userId);
  }
};

export default addProductToAUser;
