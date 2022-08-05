import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Routers } from "./services";
import "./stylesheets/App.css";
import { retainLoginSession } from "./store/authentication/auth-actions";

let isInitial = true;
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      dispatch(retainLoginSession());
      if (location.pathname === "/") {
        navigate("/home");
      }
      isInitial = false;
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
