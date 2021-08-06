import { ROLES_STATUSES } from "../data/constants";
import { getProduct } from "../data/products";
import { getUser } from "../data/users";

const getSingleProduct = (productId, userId, role) => {
  console.log(role);
  const product = getProduct(productId);
  const bought =
    role === ROLES_STATUSES.USER
      ? !getUser(userId).products.some(product => product.id === productId)
      : false;

  return Promise.resolve({ ...product, bought });
};

export default getSingleProduct;
