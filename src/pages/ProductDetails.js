import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const params = useParams();
  const DUMMY_Meals = [
    {
      id: "m1",
      name: "Sushi",
      price: 22.99,
      details: "this item is the best selling",
      rating: "*****",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: "m2",
      name: "Schnitzel",
      details: "this item is the best selling",
      rating: "*****",
      price: 16.5,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      details: "this item is the best selling",
      rating: "*****",
      price: 12.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: "m4",
      name: "Green Bowl",
      details: "this item is the best selling",
      rating: "*****",
      price: 18.99,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
  ];

  const product = DUMMY_Meals.find((item) => params.productid === item.id);

  return (
    <>
      <img src={product.imageUrl} />
      <h2>{product.name}</h2>
      <h3>{product.details}</h3>
      <h3> {product.price}</h3>
      <h3> {product.rating}</h3>
    </>
  );
};
export default ProductDetails;
