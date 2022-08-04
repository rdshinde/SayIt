import { useEffect } from "react";
import { Routers } from "./services";
import { useDispatch } from "react-redux";
import "./stylesheets/App.css";
import { retainLoginSession } from "./store/authentication/auth-actions";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      dispatch(retainLoginSession());
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
