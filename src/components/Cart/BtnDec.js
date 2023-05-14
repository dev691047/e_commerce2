// import { useState } from "react";
import { useStore } from "../../Store/CartProvide";

const BtnDecc = (props) => {
  const store = useStore();
  // const [inc, setInc] = useState(0);
  function decftn() {
    console.log(props.count);
    if (props.count >= 1) {
      store.addItem({ id: props.item_id, count: -1 });
    }
  }
  return <button onClick={decftn}>-</button>;
};
export default BtnDecc;
