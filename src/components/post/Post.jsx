import styles from "./post.module.css";
import React from "react";
import ReactJdenticon from "react-jdenticon";
import {
  BsThreeDotsVertical,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  BsBookmark,
  BsBookmarksFill,
} from "../../services";
export const Post = () => {
  return (
    <article className={styles.post_wrapper}>
      <div className={styles.post_row1}>
        <div className={styles.user_avatar}>
          <ReactJdenticon size={40} title={`Profile`} />
        </div>
        <section>
          <div className={styles.post_user_info}>
            <div className={styles.info_container}>
              <div>
                <h3>Rishikesh Shinde</h3>
                <span className={styles.user_username}>@rdshinde</span>
              </div>
              <div>
                <span className={styles.dot_seperator}></span>
                <span className={styles.timestamp}>1 min ago</span>
              </div>
            </div>
            <div className={styles.post_more_info_btn}>
              <BsThreeDotsVertical size={25} title={`More Info`} />
            </div>
          </div>
          <div className={styles.post_content}>
            <div className={styles.post_text_content}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
                minima labore perferendis repudiandae, veritatis accusamus quis
                harum quibusdam quod! Culpa provident maiores vitae aliquam
                labore mollitia, necessitatibus temporibus corrupti aperiam!
              </p>
            </div>
            <div className={styles.post_image_container}>
              <img
                src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
                alt="post_image"
              />
            </div>
          </div>
          <div className={styles.post_cta_btns}>
            <span>
              <AiOutlineHeart size={25} title={`Like`} />
            </span>
            <span>
              <AiOutlineComment size={25} title={`Comment`} />
            </span>
            <span>
              <BsBookmark size={20} title={`Add To Bookmarks`} />
            </span>
            <span>
              <AiOutlineShareAlt size={25} title={`Share`} />
            </span>
          </div>
        </section>
      </div>
    </article>
  );
};
