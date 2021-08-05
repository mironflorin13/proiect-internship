import Demo from "../user-pages/demo";
import NotFound from "../user-pages/not-found";
import ProductDetails from "../user-pages/product-details";
import Overview from "../user-pages/overview";
import Challenges from "../user-pages/challenges";
import Shop from "../user-pages/shop";
import Validation from "../admin-pages/validation";
import AdminChallenges from "../admin-pages/admin-challenges";
import AdminShop from "../admin-pages/admin-shop";

const list = [
  {
    role: ["User"],
    path: "/",
    exact: true,
    component: Overview,
  },
  {
    role: ["User"],
    path: "/challenges",
    exact: true,
    component: Challenges,
  },

  {
    role: ["User"],
    path: "/shop",
    exact: true,
    component: Shop,
  },
  {
    role: ["User"],
    path: "/demo",
    exact: true,
    component: Demo,
  },
  {
    role: ["Admin"],
    path: "/admin/challenges",
    exact: true,
    component: AdminChallenges,
  },
  {
    role: ["Admin"],
    path: "/admin/validation",
    exact: true,
    component: Validation,
  },
  {
    role: ["Admin"],
    path: "/admin/shop",
    exact: true,
    component: AdminShop,
  },

  {
    role: ["User", "Admin"],
    path: "/product/details/:id",
    exact: true,
    component: ProductDetails,
  },
  {
    role: ["User", "Admin"],
    path: "*",
    exact: false,
    component: NotFound,
  },
];

export default list;
