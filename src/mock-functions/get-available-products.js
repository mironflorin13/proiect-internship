import { getProducts } from "../data/products";
import { getUsers } from "../data/users";

const getAvailableProducts = userId => {
  const products = getProducts();
  const users = getUsers();

  const userProducts = users.find(user => user.id === userId).products;

  return Promise.resolve(
    products.filter(
      product =>
        !userProducts.find(userProduct => userProduct.id === product.id)
    )
  );
};

export default getAvailableProducts;
