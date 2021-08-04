import { getProducts, setProducts } from "../data/products";

import getAllProducts from "./get-all-products";

const editProduct = (id, title, imageURL, credit, description) => {
  const products = getProducts();
  const productsCopy = products.map(product => {
    if (product.id === id) {
      return {
        id,
        title,
        imageURL,
        credit,
        description,
      };
    }
    return product;
  });

  setProducts(productsCopy);
  return getAllProducts();
};

export default editProduct;
