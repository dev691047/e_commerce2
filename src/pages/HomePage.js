import { useContext } from "react";
import classes from "./HomePage.module.css";
import AuthContext from "../Store_Auth/auth-context";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  function clickHandler() {
    if (authCtx.isLoggedin) {
      navigate("/store");
    } else {
      navigate("/auth");
    }
  }
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1 className={classes.h1}>`Oia Poke '</h1>
        <h2>QUALITY PRODUCTS. HAWAIIAN FLAVOURS.</h2>
        <h3>Open Daily for Takeout & Delivery </h3>
        <button onClick={clickHandler} className={classes.button1}>
          order now
        </button>
      </div>
      <div className={classes.img}>
        <img src={require("../assets/homepic.webp")} />
      </div>
    </div>
  );
};
export default HomePage;
