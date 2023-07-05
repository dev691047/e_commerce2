import Header from "../components/Layout/Header";
// import Meals from "../components/Meals/Meals";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";
import { useState } from "react";

function ProductListPage() {
  const [showCart, setShowCart] = useState(false);
  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      {showCart && <Cart hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} />
      <main>
        <Meals />
      </main>
      <footer>
        <button onClick={showCartHandler}>Show Cart</button>
        <div>The Generics</div>
      </footer>
    </>
  );
}

export default ProductListPage;
