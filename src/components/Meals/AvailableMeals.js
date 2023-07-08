import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import { useStore } from "../../Store/CartProvide";
import AuthContext from "../../Store_Auth/auth-context";
import axios from "axios";
import { useEffect, useContext } from "react";

const AvailableMeals = () => {
  const store = useStore();
  const authCtx = useContext(AuthContext);
  const cartuserId = localStorage.getItem("crudUserCartId");
  const id = localStorage.getItem("userid");
  const getCartIdCrudCrud = async () => {
    try {
      const res = await axios.get(
        `https://crudcrud.com/api/8ec81e1ddd3b4e28b9cc71e694d1d6b5/${id}`
      );
      localStorage.setItem("crudUserCartId", res.data[0]._id);
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    getCartIdCrudCrud();
  }, []);

  const updateCartItemToCrudCrud = async () => {
    try {
      if (cartuserId) {
        const res = await axios.put(
          `https://crudcrud.com/api/8ec81e1ddd3b4e28b9cc71e694d1d6b5/${id}/${cartuserId}`,
          {
            items: store.items,
            totalAmount: store.totalAmount,
          }
        );
        console.log({ res });
      }
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    updateCartItemToCrudCrud();
  }, [store.totalAmount]);

  return (
    <section className={classes.Meals}>
      <Card>
        <ul className={classes.ul}>
          {store.Meals.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              image={meal.imageUrl}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
