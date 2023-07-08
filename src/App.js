import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MealStorePage from "./pages/MealStorePage";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

import Layout from "./components/Layout/Layout";
import "./App.css";
import { useContext, useEffect } from "react";
import AuthContext from "./Store_Auth/auth-context";
import axios from "axios";
import { useStore } from "./Store/CartProvide";

const App = () => {
  const authCtx = useContext(AuthContext);
  const store = useStore();

  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {authCtx.isLoggedin && (
          <Route path="/store" element={<MealStorePage />} />
        )}

        <Route path="/about" element={<AboutPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
