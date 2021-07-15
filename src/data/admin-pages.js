let adminPages = [
  {
    id: 1,
    page: "Challenges",
    path: "/challenges-admin",
  },
  {
    id: 2,
    page: "Validation",
    path: "/validation",
  },
  {
    id: 3,
    page: "Shop",
    path: "/shop-admin",
  },
];
export const setAdminPages = a => {
  adminPages = a;
};
export const getAdminPages = () => adminPages;
export default adminPages;
