let products = [
  {
    id: 1,
    title: "1-Brand new Nokia 1100",
    imageURL: [
      "https://fdn.gsmarena.com/imgroot/reviews/20/apple-iphone-12-mini/-728x314/header-thumb1.jpg",
    ],
    credit: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non, imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, in varius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.",
  },
  {
    id: 2,
    title: "2-Brand new Nokia 1100",
    imageURL: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcII-_58ZXG_luTxK31P8xgwOb1ndPWKbyw&usqp=CAU",
    ],
    credit: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "3-Brand new Nokia 1100",
    imageURL: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_wzN8UscEuxDj6Ni2mh82JsOa0ClqhlXUg&usqp=CAU",
    ],
    credit: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    title: "4-Brand new Nokia 1100",
    imageURL: [
      "https://cdn.thewirecutter.com/wp-content/media/2020/12/androidphones-2048px-pixel4a-1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKw1YvztbJl5zCVvuqYIA2kidWdQOGAVjGg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW_wzN8UscEuxDj6Ni2mh82JsOa0ClqhlXUg&usqp=CAU",
    ],
    credit: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec quam dignissim, vehicula dolor non, imperdiet enim. Proin vel sapien eget odio congue ultricies ac eget sem. Donec tempus aliquam ante, sed euismod mauris euismod nec. In malesuada nisi id leo vehicula elementum. Nullam fermentum bibendum quam, in varius urna molestie in. Nulla sit amet ligula consequat, vehicula nunc quis, tristique enim. Suspendisse potenti. Aenean aliquet, turpis eu condimentum imperdiet, magna eros consequat ante.",
  },
  {
    id: 5,
    title: "5-Brand new Nokia 1100",
    imageURL: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKw1YvztbJl5zCVvuqYIA2kidWdQOGAVjGg&usqp=CAU",
    ],
    credit: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    title: "5-Brand new Nokia 1100",
    imageURL: [],
    credit: 50,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const setProducts = p => {
  products = p;
};

export const getProducts = () => products;
export const getProduct = id => products.find(product => product.id === id);
