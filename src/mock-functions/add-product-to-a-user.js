import { PRODUCT_STATUSES } from "../data/constants";
import { getUsers, setUsers } from "../data/users";

import getAvailableProducts from "./get-available-products";

const addProductToAUser = (userId, productId, cost) => {
  const users = getUsers();

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
  console.log(usersCopy);
  return getAvailableProducts(userId);
};

export default addProductToAUser;
