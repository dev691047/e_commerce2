import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MealStorePage from "./pages/MealStorePage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

import Layout from "./components/Layout/Layout";
import "./App.css";

const router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/store" element={<MealStorePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
};

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
