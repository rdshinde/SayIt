import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Routers } from "./services";
import "./stylesheets/App.css";
import { retainLoginSession } from "./store/authentication/auth-actions";
import { getAllPosts } from "./store/post/post-actions";
import { getAllUsers } from "./store/user/user-actions";
import { addCurrentUser } from "./store/user/user-slice";
import { addFilters } from "./store/post/post-slice";
let isInitial = true;
function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isInitial) {
      dispatch(retainLoginSession());
      dispatch(getAllPosts());
      dispatch(getAllUsers());
      dispatch(addFilters(""));
      if (location.pathname === "/") {
        navigate("/home");
      }
      isInitial = false;
    }
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      dispatch(addCurrentUser({ user }));
    }
  }, [user]);
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
