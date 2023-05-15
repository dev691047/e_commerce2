// import { useState } from "react";
import { useStore } from "../../Store/CartProvide";

const BtnInc = (props) => {
  const store = useStore();
  // const [inc, setInc] = useState(0);
  function incftn() {
    store.addItem({ id: props.item_id, count: 1 });
  }
  return (
    <button style={props.style} onClick={incftn}>
      +
    </button>
  );
};
export default BtnInc;
