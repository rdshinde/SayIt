import styles from "./sidenav.module.css";
import {
  AiFillHome,
  IoMdRocket,
  BsBookmarksFill,
  BsFillBellFill,
  CgProfile,
} from "../../../services";
export const Sidenav = () => {
  return (
    <>
      <section className={styles.sidenav_wrapper}>
        <div className={styles.sidenav_link}>
          <AiFillHome size={25} title="Home" />
          <span>Home</span>
        </div>
        <div className={styles.sidenav_link}>
          <IoMdRocket size={25} title="Explore" />
          <span>Explore</span>
        </div>
        <div className={styles.sidenav_link}>
          <BsBookmarksFill size={25} title="Bookmarks" />
          <span>Bookmarks</span>
        </div>
        <div className={styles.sidenav_link}>
          <BsFillBellFill size={25} title="Notifications" />
          <span>Notifications</span>
        </div>
        <div className={styles.sidenav_link}>
          <CgProfile size={25} title="Profile" />
          <span>Profile</span>
        </div>
      </section>
    </>
  );
};
