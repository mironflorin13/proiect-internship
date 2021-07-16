let users = [
  {
    id: 0,
    name: "Daniel Toma",
    jobTitle: "Software Developer",
    image:
      "https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png",
    challenges: [
      { id: 1, status: "in-progress" },
      { id: 2, status: "in-progress" },
      { id: 3, status: "in-progress" },
      { id: 4, status: "denied" },
      { id: 5, status: "validated" },
      { id: 7, status: "to-be-validated" },
    ],
  },

  {
    id: 1,
    name: "Andrei Otea",
    jobTitle: "Software Developer",
    image:
      "https://i.pinimg.com/564x/65/25/a0/6525a08f1df98a2e3a545fe2ace4be47.jpg",
    challenges: [
      { id: 5, status: "to-be-validated" },
      { id: 9, status: "to-be-validated" },
    ],
  },
];
export const setUsers = u => {
  users = u;
};
export const getUsers = () => users;
export default users;
