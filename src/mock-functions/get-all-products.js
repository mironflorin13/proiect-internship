import { getProducts } from "../data/products";

const getAllProducts = () => {
  const products = getProducts();

  return Promise.resolve(products);
};

export default getAllProducts;
