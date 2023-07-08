import CartContext from "./cart-context";
import { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import AuthContext from "../Store_Auth/auth-context";

const DUMMY_Meals = [
  {
    id: "m1",
    name: "Sushi",
    // description: "Finest fish and veggies",
    price: 22.99,
    imageUrl:
      "https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=1380&t=st=1688627727~exp=1688628327~hmac=88973f8269d412cf241d5fcb4654d06617a36bf20311b47d58198054b1954161",
  },
  {
    id: "m2",
    name: "Schnitzel",
    // description: "A german specialty!",
    price: 16.5,
    imageUrl:
      "https://img.freepik.com/free-photo/grilled-meat-skewers-chicken-shish-kebab-with-zucchini-tomatoes-red-onions_2829-10942.jpg?w=1060&t=st=1688627733~exp=1688628333~hmac=93a7268c911ec47af283debfaf06d8c85002ecc742a69b3f4b1f40ce13ba912c",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    // description: "American, raw, meaty",
    price: 12.99,
    imageUrl:
      "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1688627738~exp=1688628338~hmac=aa0b56e02bc364ec11402b039e4ba2ded1733b067023b3777b9c086b16df3028",
  },
  {
    id: "m4",
    name: "Green Bowl",
    // description: "Healthy...and green...",
    price: 18.99,
    imageUrl:
      "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?w=740&t=st=1688627755~exp=1688628355~hmac=818d3664bb917cbaff3504fc8865e0c6517fc230e2b8a3c7317eb37db07257e6",
  },
  {
    id: "m5",
    name: "Green Bowl",
    // description: "Healthy...and green...",
    price: 18.99,
    imageUrl:
      "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=1380&t=st=1688627724~exp=1688628324~hmac=b8125c50750980334e0a28d4551f2a98cd58dde45d39548368b8cd64ad274cad",
  },
  {
    id: "m6",
    name: "Green Bowl",
    // description: "Healthy...and green...",
    price: 18.99,
    imageUrl:
      "https://img.freepik.com/premium-photo/bowl-food-with-smoke-coming-out-it_197463-2406.jpg?w=740",
  },
];

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //find index if present in cart already
    let findInd = state.items.findIndex((val) => val.id === action.item.id);

    let updatedItems,
      totalItems = state.items;
    // if we find a existing element present in the cart already
    if (findInd >= 0) {
      let it = state.items[findInd];
      if (it.count) {
        it.count = parseInt(parseInt(it.count) + parseInt(action.item.count));
      } else it.count = parseInt(action.item.count);
      totalItems[findInd] = it;
      console.log(totalItems[findInd]);
      updatedItems = totalItems;
    }
    // if we dont find a existing element present in the cart already
    else {
      updatedItems = [
        ...totalItems,
        { id: action.item.id, count: action.item.count },
      ];
    }

    // we have id so we need to identify the name by id
    // so we need to find the price of maens from dummy array by using id
    let updatedTotalAmount = 0;
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
  const authCtx = useContext(AuthContext);
  console.log(authCtx.id);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  console.log(props);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
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
