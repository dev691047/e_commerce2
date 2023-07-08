import { useState, createContext } from "react";

const AuthContext = createContext({
  token: "",
  id: "",
  isLoggedin: false,
  login: (token, id) => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);
  const [id, setId] = useState("");
  const userIsLoggedIn = !!token;

  const loginHandler = (token, id) => {
    console.log(id);
    setToken(token);
    setId(id);

    // localStorage.setItem("token", token);
    //we can also set here i have set it in the auth page;
  };
  setTimeout(() => {
    localStorage.removeItem("token");
  }, 3600 * 1000);
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("crudUserCartId");
  };

  const contextValue = {
    token: token,
    id: id,
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
