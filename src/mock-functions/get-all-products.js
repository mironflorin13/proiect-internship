import { getProducts } from "../data/products";

const getAllProducts = userChallengesIds => {
  const products = getProducts();

  return Promise.resolve(products);
};

export default getAllProducts;
