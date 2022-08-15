import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Jdenticon from "react-jdenticon";

import styles from "./sidebar.module.css";
import { Sidenav } from "./sidenav/Sidenav";
import { AiOutlineLogout } from "../../services";
import { logoutAction } from "../../store/authentication/auth-slice";

export const Sidebar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.clear();
    navigate("/");
  };

  const currentUsername = useSelector(
    (state) => state.users.currentUser?.username
  );

  return (
    <aside className={styles.sidebar_container}>
      <Sidenav />
      <section className={styles.createpost_cta_container}>
        <button
          className={`btn ${styles.createpost_cta}`}
          onClick={() => navigate(`/home#create_post`)}
        >
          Create New Post
        </button>
      </section>
      <section className={styles.user_info_container}>
        <div className={styles.logout_wrapper}>
          <div className={` m-x-md`}>
            <Jdenticon size="48" />
          </div>
          <div>
            <span className="text-4 bold-lg">
              {user?.firstName + " " + user?.lastName}
            </span>
            <Link
              to={`/profile/${currentUsername}`}
              className={styles.profile_link}
            >
              <span className="text-primary bold-lg">
                {"@" + user?.username}
              </span>
            </Link>
          </div>
          <button className="btn text-3" onClick={logoutHandler}>
            <AiOutlineLogout title="Logout" />
          </button>
        </div>
      </section>
    </aside>
  );
};
