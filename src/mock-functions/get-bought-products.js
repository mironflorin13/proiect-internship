import { PRODUCT_STATUSES } from "../data/constants";
import { getProducts } from "../data/products";
import { getUser } from "../data/users";

const getBoughtProducts = userId => {
  const products = getProducts();
  const userProducts = getUser(userId).products;

  return Promise.resolve(
    products.filter(product =>
      userProducts.some(
        userProduct =>
          userProduct.id === product.id &&
          userProduct.status === PRODUCT_STATUSES.BOUGHT
      )
    )
  );
};

export default getBoughtProducts;
