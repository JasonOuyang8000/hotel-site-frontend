import Router from "./Routes";
import "./App.css";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";

function App() {
  // const currentPath = useCurrentPath();
  // console.log(currentPath);
  const location = useLocation();
  const isLandingPage = location.pathname === "/landing";
  console.log();
  return (
    <div className="App">
      {!isLandingPage && <Navbar />}
      <Router />
    </div>
  );
}

export default App;
