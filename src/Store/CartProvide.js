import CartContext from "./cart-context";
import { useContext, useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const DUMMY_Meals = [
  {
    id: "m1",
    name: "Sushi",
    // description: "Finest fish and veggies",
    price: 22.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "m2",
    name: "Schnitzel",
    // description: "A german specialty!",
    price: 16.5,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    // description: "American, raw, meaty",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "m4",
    name: "Green Bowl",
    // description: "Healthy...and green...",
    price: 18.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
];

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let findInd = state.items.findIndex((val) => val.id === action.item.id);
    let updatedItems,
      totalItems = state.items;
    if (findInd >= 0) {
      let it = state.items[findInd];
      if (it.count) {
        it.count = parseInt(parseInt(it.count) + parseInt(action.item.count));
      } else it.count = parseInt(action.item.count);
      totalItems[findInd] = it;
      updatedItems = totalItems;
    } else updatedItems = [...totalItems, action.item];

    let updatedTotalAmount = 0;
    // we have id so we need to identify the name by id
    // so we need to find the price of maens from dummy array by using id
    for (let item of updatedItems) {
      let id = item.id;
      let filtered_item = DUMMY_Meals.filter((item) => {
        return item.id === id;
      });

      let t = filtered_item[0].price * parseInt(item.count);
      updatedTotalAmount += t;
      console.log({ updatedTotalAmount, count: item.count, filtered_item, t });
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(1),
    };
  } else if (action.type === "REMOVE") {
    let Removed_Items = state.items.filter((val) => val.id !== action.item.id);
    let total_amount = state.totalAmount - action.item.price;
    if (total_amount < 1) {
      total_amount = 0;
    }
    return {
      items: Removed_Items,
      totalAmount: total_amount,
    };
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  console.log(props);

  // const [value, setValue] = useState("ritik");

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    Meals: DUMMY_Meals,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
// export  CartProvider;
export const useStore = () => useContext(CartContext);
