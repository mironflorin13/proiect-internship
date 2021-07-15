let userPages = [
  {
    id: 1,
    page: "Overview",
    path: "/",
  },
  {
    id: 2,
    page: "Challenges",
    path: "/challenges",
  },
  {
    id: 3,
    page: "Shop",
    path: "/shop",
  },
];
export const setUserPages = u => {
  userPages = u;
};
export const getUserPages = () => userPages;
export default userPages;
