import styles from "./detailed-post.module.css";
import React from "react";
import {
  IoMdArrowBack,
  BsThreeDotsVertical,
  AiOutlineHeart,
  AiOutlineComment,
  BsBookmark,
  AiOutlineShareAlt,
} from "../../services";
export const DetailedPost = () => {
  return (
    <section className={styles.details_wrapper}>
      <div className={styles.back_btn}>
        <span className={styles.back_icon}>
          <IoMdArrowBack size={25} title={`Back`} />
        </span>
        <span className={styles.post_text}>Post</span>
      </div>
      <div className={styles.user_details}>
        <div className={styles.user_img}>
          <img
            src="https://bermuda-css.netlify.app/assets/avatar.png"
            alt="profile"
          />
        </div>
        <div>
          <h4 className={styles.user_name}>Rishikesh Shinde</h4>
          <p className={styles.user_username}>@rdshinde</p>
        </div>
        <div className={styles.more_info_btn}>
          <BsThreeDotsVertical size={20} title={`More Info`} />
        </div>
      </div>
      <article className={styles.post_content}>
        <p className={styles.post_text_content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, unde
          doloribus consectetur amet provident id magni mollitia quibusdam ut
          rerum praesentium suscipit accusamus ullam? Amet sint at quaerat
          officia blanditiis!
        </p>
        <div className={styles.post_image_container}>
          <img
            src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
            alt="post_image"
          />
        </div>
        <div className={styles.post_timestamp}>
          <small>12:11 AM Oct 11 2021</small>
        </div>
        <div className={styles.post_stats}>
          <div>
            <span className={styles.likes}>43</span>
            Likes
          </div>
          <div className={styles.comments}>
            <span>10</span>
            Comments
          </div>
          <div className={styles.shares}>
            <span>1</span>
            Share
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
      </article>
    </section>
  );
};
