import styles from "./post-input.module.css";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactJdenticon from "react-jdenticon";
import {
  GrGallery,
  AiOutlineFileGif,
  AiOutlineVideoCameraAdd,
} from "../../services";
export const PostInput = () => {
  const hiddenImageInput = useRef();
  const [previewSrc, setPreviewSrc] = useState("");
  const [uploadFile, setUploadFile] = useState();
  const [uploadedFileSrc, setUploadedFileSrc] = useState("");
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
  };
  const uploadMediaHandler = async () => {
    const fd = new FormData();
    fd.append("file", uploadFile);
    fd.append("upload_preset", "sayit-app");
    fd.append("api_key", "248268816851917");
    console.log("media");
    try {
      console.log(
        await axios.post(
          "https://api.cloudinary.com/v1_1/dasp4lwr4/image/upload",
          fd
        )
      );
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (previewSrc) {
      uploadMediaHandler();
    }
  }, [previewSrc]);
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
            ></textarea>
            <div className={styles.characters_count}>180</div>
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
            <button className={`btn`}>
              <AiOutlineFileGif size={20} title="Insert Gif" />
            </button>
            <button className={`btn`}>
              <AiOutlineVideoCameraAdd size={20} title="Insert Video" />
            </button>
          </div>
          <div>
            <button className={`btn ${styles.post_cta_btn}`} title={`Add Post`}>
              Post
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
