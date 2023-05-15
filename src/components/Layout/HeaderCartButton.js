import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

import { useStore } from "../../Store/CartProvide";
import { useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const store = useStore();
  const [numberofItems, setNumberofItems] = useState(store.items.length);

  useEffect(() => {
    setNumberofItems(store.items.length);
  }, [store.items.length]);

  return (
    <button className={classes.button} onClick={props.showCart}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofItems}</span>
    </button>
  );
};
export default HeaderCartButton;
