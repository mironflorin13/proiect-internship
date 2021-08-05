import { getProduct } from "../data/products";

const getSingleProduct = id => {
  const product = getProduct(id);

  return Promise.resolve(product);
};

export default getSingleProduct;
