let users = [
  {
    id: 0,
    name: "Daniel Toma",
    jobTitle: "Software Developer",
    credits: 511,
    image:
      "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png",
    challenges: [
      { id: 1, status: "IN_PROGRESS" },
      { id: 2, status: "IN_PROGRESS" },
      { id: 3, status: "IN_PROGRESS" },
      { id: 4, status: "DENIED" },
      { id: 5, status: "VALIDATED" },
      { id: 8, status: "TO_BE_VALIDATED" },
      { id: 9, status: "TO_BE_VALIDATED" },
    ],
    products: [
      { id: 1, status: "BOUGHT" },
      { id: 2, status: "BOUGHT" },
      { id: 3, status: "BOUGHT" },
    ],
    roles: ["User", "Admin"],
  },

  {
    id: 1,
    name: "Andrei Otea",
    jobTitle: "Software Developer",
    credits: 521,
    image:
      "https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
    challenges: [
      { id: 5, status: "TO_BE_VALIDATED" },
      { id: 9, status: "TO_BE_VALIDATED" },
    ],
    products: [],
    roles: ["Admin"],
  },
  {
    id: 2,
    name: "User 3",
    jobTitle: "Software Developer",
    image:
      "https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
    challenges: [
      { id: 5, status: "VALIDATED" },
      { id: 9, status: "IN_PROGRESS" },
    ],
    products: [],
    roles: ["User"],
  },
];
export const setUsers = u => {
  users = u;
};
export const getUsers = () => users;
export const getUser = userId => users.find(user => user.id === userId);
export default users;
