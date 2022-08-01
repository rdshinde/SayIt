import React from "react";
import styles from "./post-more-action-modal.module.css";
import { AiFillEdit, MdDelete } from "../../services";
export const PostMoreActionModal = ({
  data: { moreActionModalState, moreActionModalHandler },
}) => {
  return (
    <section
      className={`${styles.more_actions_modal} ${
        moreActionModalState ? styles.show_modal : ""
      }`}
    >
      <div className={styles.edit_action}>
        <span>
          <AiFillEdit size={20} title={"Edit post"} />
        </span>
        <span>Edit Post</span>
      </div>
      <div className={styles.delete_action}>
        <span>
          <MdDelete size={20} title={"Edit post"} />
        </span>
        <span>Delete Post</span>
      </div>
    </section>
  );
};
