import Router from "./Routes";
import "./App.css";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  // const currentPath = useCurrentPath();
  // console.log(currentPath);
  const location = useLocation();
  const isLandingPage = location.pathname === "/landing";
  const isSignUpPage = location.pathname === "/SignUp";

  console.log(process.env.REACT_APP_BACKEND_LINK);

  return (
    <div className="App">
      {!isLandingPage && !isSignUpPage && <Navbar />}
      <Router />
    </div>
  );
}

export default App;
