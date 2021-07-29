import { getProducts, setProducts } from "../data/products";

import getAllProducts from "./get-all-products";

const addProduct = (title, imageURL, credit, description) => {
  const products = getProducts();
  let productsCopy;
  if (products.length === 0) {
    productsCopy = [
      {
        id: 1,
        title,
        imageURL,
        credit,
        description,
      },
    ];
  } else {
    productsCopy = [
      ...products,
      {
        id: products[products.length - 1].id + 1,
        title,
        imageURL,
        credit,
        description,
      },
    ];
  }

  setProducts(productsCopy);
  return getAllProducts();
};

export default addProduct;
