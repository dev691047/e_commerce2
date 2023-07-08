import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const DUMMY_Meals = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      imageUrl:
        "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1380&t=st=1688627727~exp=1688628327~hmac=88973f8269d412cf241d5fcb4654d06617a36bf20311b47d58198054b1954161",
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      imageUrl:
        "https://img.freepik.com/free-photo/grilled-meat-skewers-chicken-shish-kebab-with-zucchini-tomatoes-red-onions_2829-10942.jpg?w=1060&t=st=1688627733~exp=1688628333~hmac=93a7268c911ec47af283debfaf06d8c85002ecc742a69b3f4b1f40ce13ba912c",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      imageUrl:
        "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1688627738~exp=1688628338~hmac=aa0b56e02bc364ec11402b039e4ba2ded1733b067023b3777b9c086b16df3028",
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      imageUrl:
        "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?w=740&t=st=1688627755~exp=1688628355~hmac=818d3664bb917cbaff3504fc8865e0c6517fc230e2b8a3c7317eb37db07257e6",
    },
    {
      id: "m5",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      imageUrl:
        "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1380&t=st=1688627724~exp=1688628324~hmac=b8125c50750980334e0a28d4551f2a98cd58dde45d39548368b8cd64ad274cad",
    },
    {
      id: "m6",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      imageUrl:
        "https://img.freepik.com/premium-photo/bowl-food-with-smoke-coming-out-it_197463-2406.jpg?w=740",
    },
  ];

  const product = DUMMY_Meals.find((item) => params.productid === item.id);

  return (
    <>
      <img src={product.imageUrl} />
      <h2>{product.name}</h2>
      <h3>{product.description}</h3>
      <h3> {product.price}</h3>
      <h3> {product.rating}</h3>
    </>
  );
};
export default ProductDetails;
