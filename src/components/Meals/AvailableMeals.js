import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealsItem/MealItem";
import { useStore } from "../../Store/CartProvide";

const AvailableMeals = () => {
  const store = useStore();
  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.ul}>
          {store.meals.map((meal) => (
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
