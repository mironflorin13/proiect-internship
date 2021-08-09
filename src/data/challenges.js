let challenges = [
  {
    id: 1,
    title: "1-Do a byte-sized learning talk",
    xp: 15,
    credits: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.",
  },
  {
    id: 2,
    title: "2-Do a byte-sized learning talk",
    xp: 32,
    credits: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.orem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "3-Do a byte-sized",
    xp: 30,
    credits: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "4-Do a byte-sized learning talkss",
    xp: 10,
    credits: 100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor. orem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 5,
    title: "5-Do a byte-sized learning talk ",
    xp: 10,
    credits: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
  },
  {
    id: 6,
    title: "6-Do a byte-sized ",
    xp: 15,
    credits: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
  },
  {
    id: 7,
    title: "7-Do a byte-sized learning talk",
    xp: 15,
    credits: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
  },
  {
    id: 8,
    title: "8-Do a byte-sized learning talk",
    xp: 15,
    credits: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
  },
  {
    id: 9,
    title: "9-Do a byte-sized learning talk",
    xp: 15,
    credits: 500,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
  },
];

export const setChallenges = c => {
  challenges = c;
};

export const getChallenges = () => challenges;
export const getChallenge = challengeId =>
  challenges.find(challenge => challenge.id === challengeId);
