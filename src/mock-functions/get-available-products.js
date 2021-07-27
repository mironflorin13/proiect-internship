import { getProducts } from "../data/products";
import { getUser } from "../data/users";

const getAvailableProducts = userId => {
  const products = getProducts();
  const userProducts = getUser(userId).products;

  return Promise.resolve(
    products.filter(
      product =>
        !userProducts.some(userProduct => userProduct.id === product.id)
    )
  );
};

export default getAvailableProducts;
