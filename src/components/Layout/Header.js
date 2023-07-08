import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { useContext } from "react";
import AuthContext from "../../Store_Auth/auth-context";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  function logoutHandler() {
    authCtx.logout();
    // navigate("/auth");
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.nav}>
          <Link style={{ paddingLeft: 13, textDecoration: "none" }} to="/">
            HOME
          </Link>

          {!authCtx.isLoggedin && (
            <Link
              style={{
                paddingLeft: 13,
                textDecoration: "none",
              }}
              to="/auth"
            >
              STORE
            </Link>
          )}
          {authCtx.isLoggedin && (
            <Link
              style={{
                paddingLeft: 13,
                textDecoration: "none",
              }}
              to="/store"
            >
              STORE
            </Link>
          )}
          <Link style={{ paddingLeft: 13, textDecoration: "none" }} to="/about">
            ABOUT
          </Link>
          {!authCtx.isLoggedin && (
            <Link
              style={{
                paddingLeft: 13,
                textDecoration: "none",
              }}
              to="/auth"
            >
              LOGIN
            </Link>
          )}
          {authCtx.isLoggedin && (
            <Link
              style={{
                paddingLeft: 13,
                textDecoration: "none",
              }}
              onClick={logoutHandler}
              to="/auth"
            >
              LOGOUT
            </Link>
          )}
        </div>
        {authCtx.isLoggedin && (
          <HeaderCartButton
            className={classes.cart}
            showCart={props.showCartHandler}
          />
        )}
      </header>
    </>
  );
};

export default Header;
