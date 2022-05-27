import styles from "./sidebar.module.css";
import { Sidenav } from "./sidenav/Sidenav";
import Jdenticon from "react-jdenticon";
import { AiOutlineLogout } from "../../services";
export const Sidebar = () => {
  return (
    <aside className={styles.sidebar_container}>
      <Sidenav />
      <section className={styles.createpost_cta_container}>
        <button className={`btn ${styles.createpost_cta}`}>
          Create New Post
        </button>
      </section>
      <section className={styles.user_info_container}>
        <div className={styles.logout_wrapper}>
          <div className={` m-x-md`}>
            <Jdenticon size="48" />
          </div>
          <div>
            <span className="text-4 bold-lg">Rishikesh Shinde</span>
            <span className="text-secondary bold-md">@rdshinde</span>
          </div>
          <button className="btn text-3">
            <AiOutlineLogout title="Logout" />
          </button>
        </div>
      </section>
    </aside>
  );
};
