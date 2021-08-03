const routess = [
  {
    role: "User",
    path: "/",
    exact: true,
    component: "OverView",
  },
  {
    role: "User",
    path: "/challenges",
    exact: true,
    component: "Challenges",
  },
  {
    role: "User",
    path: "/product/details/:id",
    exact: true,
    component: "ProductDetails",
  },
  {
    role: "User",
    path: "/shop",
    exact: true,
    component: "Shop",
  },
  {
    role: "User",
    path: "/demo",
    exact: true,
    component: "Demo ",
  },
  {
    role: "User",
    path: "*",
    exact: false,
    component: "NotFound",
  },
];
export default routess;
