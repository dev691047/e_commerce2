import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useStore } from "../../Store/CartProvide";
import BtnInc from "./BtnInc";
import BtnDec from "./BtnDec";

//if item is of same id as added item then change the amount of that
const Cart = (props) => {
  const store = useStore();

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {store.items.map((item) => {
        let filtered_item = store.meals.filter((v) => v.id === item.id);
        console.log({ filtered_item });

        return (
          <li>
            {item.count > 0 && (
              <>
                <h4>{`${filtered_item[0].name}  [x${item.count}]`}</h4>
                <p>price: {filtered_item[0].price}</p>
                <BtnInc item_id={item.id} count={item.count} />
                <BtnDec item_id={item.id} count={item.count} />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      {cartItems}
      {/* {console.log(store.items[0].count)} */}
      <div className={classes.total}>
        <span>Total amount</span>
      </div>

      <div>{store.totalAmount}</div>

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
