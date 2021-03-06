import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Checklist from "./pages/Checklist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/checklist" element={<Checklist />} />
    </Routes>
  );
};

export default Router;
