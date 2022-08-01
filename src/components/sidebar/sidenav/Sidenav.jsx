import styles from "./sidenav.module.css";
import {
  AiFillHome,
  IoMdRocket,
  BsBookmarksFill,
  BsFillBellFill,
  CgProfile,
} from "../../../services";
import { NavLink } from "react-router-dom";
export const Sidenav = () => {
  const isLinkActive = ({ isActive }) => {
    return isActive
      ? `${styles.sidenav_link} ${styles.sidenav_active_link}`
      : `${styles.sidenav_link}`;
  };
  return (
    <>
      <section className={styles.sidenav_wrapper}>
        <NavLink to={"/home"} className={isLinkActive}>
          <AiFillHome size={25} title="Home" />
          <span>Home</span>
        </NavLink>
        <NavLink to={"/explore"} className={isLinkActive}>
          <IoMdRocket size={25} title="Explore" />
          <span>Explore</span>
        </NavLink>
        <NavLink to={"/bookmarks"} className={isLinkActive}>
          <BsBookmarksFill size={25} title="Bookmarks" />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to={"/notifications"} className={isLinkActive}>
          <BsFillBellFill size={25} title="Notifications" />
          <span>Notifications</span>
        </NavLink>
        <NavLink to={"/profile"} className={isLinkActive}>
          <CgProfile size={25} title="Profile" />
          <span>Profile</span>
        </NavLink>
      </section>
    </>
  );
};
