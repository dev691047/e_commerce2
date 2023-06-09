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
              <div className={classes.item_layout}>
                <div style={{ width: "80px" }}>
                  <img
                    className={classes.img}
                    src={filtered_item[0].imageUrl}
                    alt=""
                  ></img>
                  {`${filtered_item[0].name} `}
                  <hr />
                </div>

                <div style={{ width: "50px" }}>{filtered_item[0].price}</div>
                <div className={classes.quantity}>
                  <span className={classes.count}>{item.count}</span>
                  <BtnInc
                    style={{ marginRight: "3px" }}
                    item_id={item.id}
                    count={item.count}
                  />
                  <BtnDec
                    item_id={item.id}
                    price={filtered_item[0].price}
                    count={item.count}
                  />
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <Modal hideCartHandler={props.hideCartHandler}>
      <h3 style={{ fontSize: "25px", marginLeft: "40%" }}>Cart</h3>
      <div className={classes.heading}>
        <span>ITEM</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
      </div>
      <hr />

      {cartItems}

      <div className={classes.total}>
        <span style={{ marginLeft: "80%" }}>Total</span>
      </div>
      <div
        style={{
          marginLeft: "81%",
          marginTop: "-15px",
          marginBottom: "10px",
          fontWeight: "600",
          Color: "blue",
        }}
      >
        {store.totalAmount}
      </div>
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
