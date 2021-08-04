import { getProducts, setProducts } from "../data/products";
import { getUsers, setUsers } from "../data/users";

import getAllProducts from "./get-all-products";

const deleteChallenge = id => {
  const products = getProducts();
  const productsAfterDeletion = products.filter(product => product.id !== id);

  const users = getUsers();
  const usersCopy = users.map(user => ({
    ...user,
    products: user.products.filter(product => product.id !== id),
  }));

  setUsers(usersCopy);
  setProducts(productsAfterDeletion);

  return getAllProducts();
};

export default deleteChallenge;
