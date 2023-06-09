import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import App from "./App";
import HomePage from "./pages/HomePage";
const router = createBrowserRouter([
  { path: "/about", element: <AboutPage /> },
  { path: "/", element: <App /> },
  { path: "/home", element: <HomePage /> },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
