import { useContext, useEffect, useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import { useStore } from "../../../Store/CartProvide";
import axios from "axios";
import AuthContext from "../../../Store_Auth/auth-context";
const MealItemForm = (props) => {
  const store = useStore();
  const auth = useContext(AuthContext);
  const [count, setCount] = useState();
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const updateItem = async () => {
    store.addItem({ id: props.id, count });
  };

  const getVal = (value) => {
    setCount(value);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        className={classes.input1}
        getVal={getVal}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={updateItem}>Add</button>
    </form>
  );
};
export default MealItemForm;
