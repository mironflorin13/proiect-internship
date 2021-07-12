let challenges = [
  {
    id: 1,
    title: "Do a byte-sized learning talk",
    xp: 15,
    credits: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.",
    status: "in-progress",
  },
  {
    id: 2,
    title: "Do a byte-sized learning talk",
    xp: 32,
    credits: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.orem ipsum dolor sit amet, consectetur adipiscing elit",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Do a byte-sized",
    xp: 30,
    credits: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Do a byte-sized learning talkss sdasdas",
    xp: 10,
    credits: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor. orem ipsum dolor sit amet, consectetur adipiscing elit",
    status: "validated",
  },
  {
    id: 5,
    title: "Do a byte-sized learning talk sadsada",
    xp: 15,
    credits: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
    status: "denied",
  },
];

export const setChallenges = c => {
  challenges = c;
};

export const getChallenges = () => challenges;
