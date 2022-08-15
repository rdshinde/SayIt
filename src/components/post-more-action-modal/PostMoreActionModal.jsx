import React from "react";
import styles from "./post-more-action-modal.module.css";
import { AiFillEdit, MdDelete } from "../../services";
import { deletePost } from "../../store/post/post-actions";
import { useDispatch } from "react-redux";
import {
  openModal,
  setModalData,
} from "../../store/modal-management/modal-slice";
export const PostMoreActionModal = ({
  data: { moreActionModalState, moreActionModalHandler, post },
}) => {
  const dispatch = useDispatch();
  const postDeleteHandler = () => {
    dispatch(deletePost({ postId: post._id }));
    moreActionModalHandler(!false);
  };
  const editPostHandler = () => {
    dispatch(openModal("edit-post"));
    dispatch(setModalData({ data: { ...post } }));
  };
  return (
    <section
      className={`${styles.more_actions_modal} ${
        moreActionModalState ? styles.show_modal : ""
      }`}
    >
      <div
        className={styles.edit_action}
        role={"button"}
        onClick={editPostHandler}
      >
        <span>
          <AiFillEdit size={20} title={"Edit post"} />
        </span>
        <span>Edit Post</span>
      </div>
      <div
        className={styles.delete_action}
        role={"button"}
        onClick={postDeleteHandler}
      >
        <span>
          <MdDelete size={20} title={"Delete post"} />
        </span>
        <span>Delete Post</span>
      </div>
    </section>
  );
};
