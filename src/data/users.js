let users = [
  {
    id: 0,
    name: "Daniel Toma",
    jobTitle: "Software Developer",
    image:
      "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png",
    challenges: [1, 2, 3, 4, 5],
    products: [
      { id: 1, status: "bought" },
      { id: 2, status: "bought" },
      { id: 3, status: "bought" },
    ],
  },

  {
    id: 1,
    name: "Andrei Otea",
    jobTitle: "Software Developer",
    image:
      "https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
    challenges: [],
  },
];
export const setUsers = u => {
  users = u;
};
export const getUsers = () => users;
export default users;
