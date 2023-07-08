import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import { useStore } from "../../Store/CartProvide";
import AuthContext from "../../Store_Auth/auth-context";
import axios from "axios";
import { useEffect, useContext } from "react";

const AvailableMeals = () => {
  const store = useStore();
  const auth = useContext(AuthContext);

  // const updateCartItemToCrudCrud = async () => {
  //   try {
  //     console.log({ auth });
  //     await axios.post(
  //       `https://crudcrud.com/api/336f4b1d4bf5406883689d6c9fc7865e/${auth.id}`,
  //       {
  //         items: store.items,
  //         totalAmount: store.totalAmount,
  //       }
  //     );
  //   } catch (e) {
  //     console.log({ e });
  //   }
  // };
  // const getUpdatedCartItemsFromCrudCrud = async () => {
  //   try {
  //     await axios
  //       .get(
  //         `https://crudcrud.com/api/336f4b1d4bf5406883689d6c9fc7865e/${auth.id}`,
  //         {}
  //       )
  //       .then(function (response) {
  //         console.log(response.data);
  //       });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   updateCartItemToCrudCrud();
  //   console.log("called");
  //   getUpdatedCartItemsFromCrudCrud();
  // }, [store.totalAmount]);

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
