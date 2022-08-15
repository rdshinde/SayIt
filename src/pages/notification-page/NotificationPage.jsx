import { Notification } from "../../components";
import { PageLayout } from "../page-layout/PageLayout";
import styles from "./notification-page.module.css";
export const NotificationPage = () => {
  return (
    <>
      <PageLayout>
        <div className={styles.title}>
          <h2>Notifications</h2>
        </div>
        <h2 className="text-2 text-center text-secondary bold-lg m-t-xxl">
          You have no notifications!
        </h2>
      </PageLayout>
    </>
  );
};
