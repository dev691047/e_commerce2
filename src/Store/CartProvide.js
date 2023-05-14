import CartContext from "./cart-context";
import { useContext, useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let findIn = state.items.findIndex((val) => val.id === action.item.id);
    let updatedItems,
      totalItems = state.items;
    if (findIn >= 0) {
      let it = state.items[findIn];
      if (it.count) {
        it.count = parseInt(parseInt(it.count) + parseInt(action.item.count));
      } else it.count = parseInt(action.item.count);
      totalItems[findIn] = it;
      updatedItems = totalItems;
    } else updatedItems = [...totalItems, action.item];
    // const totalItems = updatedItems.length;
    let updatedTotalAmount = 0;
    // we have id so we need to identify the name by id
    // so we need to find the price of maens from dummy array by using id
    for (let item of updatedItems) {
      let id = item.id;
      let filtered_item = DUMMY_MEALS.filter((item) => {
        return item.id === id;
      });

      let t = filtered_item[0].price * parseInt(item.count);
      updatedTotalAmount += t;
      console.log({ updatedTotalAmount, count: item.count, filtered_item, t });
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(0),
    };
  } else {
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  // const [value, setValue] = useState("ritik");

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    meals: DUMMY_MEALS,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
// export  CartProvider;
export const useStore = () => useContext(CartContext);
