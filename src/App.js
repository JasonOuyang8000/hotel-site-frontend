import Router from "./Routes";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  // const currentPath = useCurrentPath();
  // console.log(currentPath);
  const location = useLocation();
  const isLandingPage = location.pathname === "/landing";

  console.log(process.env.REACT_APP_BACKEND_LINK);
  return (
    <div className="App">
      {!isLandingPage && <Navbar />}
      <Router />
    </div>
  );
}

export default App;
