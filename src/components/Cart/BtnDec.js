// import { useState } from "react";
import { useStore } from "../../Store/CartProvide";

const BtnDecc = (props) => {
  const store = useStore();
  function decftn() {
    console.log(props.count);
    if (props.count < 2) {
      store.removeItem({ id: props.item_id, price: props.price });
    } else {
      store.addItem({ id: props.item_id, count: -1 });
    }
  }
  return <button onClick={decftn}>-</button>;
};
export default BtnDecc;
