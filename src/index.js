import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CartProvider } from "./Store/CartProvide";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
