import styles from "./post-input.module.css";
import React, { useEffect, useRef, useState } from "react";
import ReactJdenticon from "react-jdenticon";
import { useDispatch } from "react-redux";
import {
  GrGallery,
  BsEmojiSmileFill,
  AiOutlineVideoCameraAdd,
} from "../../services";
import { EmojiModal } from "../emoji-modal/EmojiModal";
import { Toast } from "../../utils";
import { createPost } from "../../store/post/post-actions";

export const PostInput = () => {
  const hiddenImageInput = useRef();
  const [isEmojiModalVisible, setEmojiModalState] = useState(false);
  const [postCharCount, setPostCharCount] = useState(0);
  const [postTextInput, setPostTextInput] = useState("");
  const [previewSrc, setPreviewSrc] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [imageFormData, setImageFormData] = useState(null);
  const [uploadedFileSrc, setUploadedFileSrc] = useState("");
  const dispatch = useDispatch();
  const imageInputHandler = (event) => {
    hiddenImageInput.current.click();
  };

  const handleImageInputChange = (event) => {
    const fileUploaded = event.target.files[0];
    setUploadedFileSrc(event.target.value);
    setUploadFile(fileUploaded);
    const src = URL.createObjectURL(fileUploaded);
    setPreviewSrc(src);
  };

  const removeFileHandler = () => {
    setUploadedFileSrc("");
    setPreviewSrc("");
    setImageFormData(null);
  };

  const getMediaFormData = () => {
    const fd = new FormData();
    fd.append("file", uploadFile);
    fd.append("upload_preset", "sayit-app");
    setImageFormData(fd);
    // fd.append("api_key", "248268816851917");
    //     "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
  };

  const textInputHandler = (e) => {
    setPostTextInput(e.target.value.trim());
  };

  useEffect(() => {
    setPostCharCount(postTextInput.length);
  }, [postTextInput]);

  useEffect(() => {
    getMediaFormData();
  }, [uploadFile]);

  const getChosenEmoji = (chosenEmoji) => {
    setPostTextInput((prev) => `${prev}${chosenEmoji.emoji}`);
  };

  const emojiModalHandler = () => {
    setEmojiModalState((prev) => !prev);
  };

  const handlePostSubmit = () => {
    if (postTextInput.trim().length > 0 || imageFormData) {
      if (imageFormData?.get("file").size < 0) {
        Toast({ type: "error", msg: "Cannot Process empty media." });
      } else if (postTextInput.trim().length <= 0) {
        Toast({ type: "error", msg: "Cannot Process empty text." });
      } else {
        // console.log({ postTextInput, imageFormData });
        dispatch(createPost({ postTextInput, imageFormData }));
      }
    } else {
      Toast({ type: "error", msg: "Cannot Process invalid post." });
    }
  };

  return (
    <section className={`${styles.post_input_wrapper}`}>
      <div className={styles.post_input_row1}>
        <div className={styles.user_avatar}>
          <ReactJdenticon size={40} title={`Profile`} />
        </div>
        <div className={styles.post_text_input}>
          <div className={styles.textarea_wrapper}>
            <textarea
              name="post-text"
              id="post-text"
              cols="55"
              rows="6"
              placeholder="Write something Here..."
              onChange={textInputHandler}
              value={postTextInput}
            ></textarea>
            <div
              className={`${styles.characters_count}`}
              style={{ color: postCharCount === 180 && "red" }}
            >
              {180 - postCharCount}
            </div>
          </div>
          <div className={styles.upload_info_container}>
            <div className={styles.image_preview_container}>
              {previewSrc && (
                <span>
                  <img
                    src={previewSrc}
                    className={styles.preview_image}
                    alt=""
                  />
                  <span className="p-l-sm">
                    <small
                      role={"button"}
                      className={styles.remove_image_btn}
                      onClick={removeFileHandler}
                    >
                      Remove Image
                    </small>
                  </span>
                </span>
              )}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={styles.post_input_row2}>
        <div></div>
        <div className={styles.post_input_btns}>
          <div className={styles.media_btns}>
            <button
              className={`btn`}
              style={{ paddingLeft: "0" }}
              onClick={imageInputHandler}
            >
              <GrGallery size={18} title="Insert Image" />
            </button>
            <input
              type="file"
              accept="image/gif, image/jpeg, image/png, image/jpg,"
              onChange={handleImageInputChange}
              style={{ display: "none" }}
              value={uploadedFileSrc}
              ref={hiddenImageInput}
            />
            <button className={`btn`} onClick={emojiModalHandler}>
              <BsEmojiSmileFill size={20} title="Insert Gif" />
            </button>
            <button className={`btn btn-disabled`}>
              <span className="btn-disabled">
                <AiOutlineVideoCameraAdd size={20} title="Insert Video" />
              </span>
            </button>
            <EmojiModal
              data={{ isEmojiModalVisible, setEmojiModalState, getChosenEmoji }}
            />
          </div>
          <div>
            <button
              className={`btn ${styles.post_cta_btn}`}
              title={`Add Post`}
              onClick={handlePostSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
