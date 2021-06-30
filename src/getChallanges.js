import React from "react";

const getChallanges = (id) => {
  const challanges = [
    {
      id: 1,
      userID: 1,
      title: "Do a byte-sized learning talk",
      xp: 15,
      credits: 50,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.",
      status: null,
    },
    {
      id: 2,
      userID: 1,
      title: "Do a byte-sized learning talk",
      xp: 32,
      credits: 50,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.orem ipsum dolor sit amet, consectetur adipiscing elit",
      status: null,
    },
    {
      id: 3,
      userID: 1,
      title: "Do a byte-sized",
      xp: 30,
      credits: 50,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: null,
    },
    {
      id: 4,
      userID: 1,
      title: "Do a byte-sized learning talkss sdasdas",
      xp: 10,
      credits: 100,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor. orem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "validated",
    },
    {
      id: 5,
      userID: 1,
      title: "Do a byte-sized learning talk sadsada",
      xp: 15,
      credits: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet le",
      status: "denied",
    },
    {
      id: 6,
      userID: 2,
      title: "Do a byte-sized learning talk",
      xp: 15,
      credits: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales lacus sed urna iaculis, et gravida sem faucibus. Sed at orci sit amet lectus euismod ultrices eget quis tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      status: "denied",
    },
  ];
  const userChallenges = challanges.filter(
    (challange) => challange.userID === id
  );

  return Promise.resolve(userChallenges);
};

export default getChallanges;
