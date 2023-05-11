import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "egg", amount: 2, price: 12 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
      </div>
      <div>30</div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          close
        </button>
        <button className={classes.button}>order</button>
      </div>
    </Modal>
  );
};
export default Cart;
