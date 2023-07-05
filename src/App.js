import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductListPage from "./pages/MealsListPage";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";
import Header from "./components/Layout/Header";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <ProductListPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/:productid", element: <ProductDetails /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
