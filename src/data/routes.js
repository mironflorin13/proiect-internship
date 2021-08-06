import Demo from "../user-pages/demo";
import NotFound from "../user-pages/not-found";
import ProductDetails from "../user-pages/product-details";
import Overview from "../user-pages/overview";
import Challenges from "../user-pages/challenges";
import Shop from "../user-pages/shop";
import Validation from "../admin-pages/validation";
import AdminChallenges from "../admin-pages/admin-challenges";
import AdminShop from "../admin-pages/admin-shop";

import { ROLES_STATUSES } from "./constants";

const list = [
  {
    role: [ROLES_STATUSES.USER],
    path: "/",
    exact: true,
    component: Overview,
  },
  {
    role: [ROLES_STATUSES.USER],
    path: "/challenges",
    exact: true,
    component: Challenges,
  },

  {
    role: [ROLES_STATUSES.USER],
    path: "/shop",
    exact: true,
    component: Shop,
  },
  {
    role: [ROLES_STATUSES.USER],
    path: "/demo",
    exact: true,
    component: Demo,
  },
  {
    role: [ROLES_STATUSES.ADMIN],
    path: "/admin/challenges",
    exact: true,
    component: AdminChallenges,
  },
  {
    role: [ROLES_STATUSES.ADMIN],
    path: "/admin/validation",
    exact: true,
    component: Validation,
  },
  {
    role: [ROLES_STATUSES.ADMIN],
    path: "/admin/shop",
    exact: true,
    component: AdminShop,
  },

  {
    role: [ROLES_STATUSES.USER, ROLES_STATUSES.ADMIN],
    path: "/product/details/:id",
    exact: true,
    component: ProductDetails,
  },
  {
    role: [ROLES_STATUSES.USER, ROLES_STATUSES.ADMIN],
    path: "*",
    exact: false,
    component: NotFound,
  },
];

export default list;
