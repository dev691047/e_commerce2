// import { useContext } from "react";
import { useStore } from "../../Store/CartProvide";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  const store = useStore();
  console.log(store);

  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
export default Meals;
