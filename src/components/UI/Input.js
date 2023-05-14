import { useState, useEffect } from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const [val, setVal] = useState(0);
  function changeInput(e) {
    setVal(e.target.value);
  }

  useEffect(() => {
    props.getVal(val);
  }, [props, val]);

  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} value={val} onChange={changeInput} />
    </div>
  );
};
export default Input;
