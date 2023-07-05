import { useState, createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedin: false,
  login: (token) => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    // localStorage.setItem("token", token);
    //we can also set here i have set it in the auth page;
  };
  setTimeout(() => {
    localStorage.removeItem("token");
  }, 50000);
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedin: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
