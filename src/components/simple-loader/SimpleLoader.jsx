import styles from "./simple_loader.module.css";
export const SimpleLoader = () => {
  return (
    <div className={styles.loader__overlay}>
      <div className={styles.lds_ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
