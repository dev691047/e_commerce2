import { useState, useRef, useContext } from "react";
import axios from "axios";
import classes from "./AuthPage.module.css";
// import { useNavigate } from "react-router-dom";
import AuthContext from "../Store_Auth/auth-context";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const useContx = useContext(AuthContext);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      try {
        const reslogin = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCr2_NJp2XVHwrubW1Q10BDG-_svvNwWwk",
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        );

        useContx.login(reslogin.data.idToken);
        localStorage.setItem("token", reslogin.data.idToken);
      } catch (e) {
        console.log(e);
        alert(e.response.data.error.message);
      }
      emailInputRef.current.value = null;
      passwordInputRef.current.value = null;
    } else {
      try {
        const res = await axios.post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCr2_NJp2XVHwrubW1Q10BDG-_svvNwWwk",
          {
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }
        );
        console.log(res.status);
        setSignupSuccess("signup successful");
        useContx.login(res.data.idToken);
        localStorage.setItem("token", res.data.idToken);
      } catch (e) {
        console.log(e.response.data.error.message);
        setSignupSuccess(e.response.data.error.message);
        alert(e.response.data.error.message);
      }
      emailInputRef.current.value = null;
      passwordInputRef.current.value = null;
    }
  }

  return (
    <section className={classes.auth} style={{ marginTop: "100px" }}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <h4 style={{ color: "orange" }}>{signupSuccess}</h4>

        <button type="submit">
          {!isLogin ? "Create new account" : "Login "}
        </button>
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthPage;
