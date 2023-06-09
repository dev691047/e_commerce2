import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.nav}>
          <NavLink to="/home">HOME</NavLink>
          <NavLink to="/">STORE</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
        </div>
        <HeaderCartButton
          className={classes.cart}
          showCart={props.showCartHandler}
        />
      </header>
    </>
  );
};

export default Header;
