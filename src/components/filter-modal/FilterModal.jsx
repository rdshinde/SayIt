import React from "react";
import styles from "./filter-modal.module.css";
export const FilterModal = ({
  data: { filterModalState, modalStateHandler },
}) => {
  return (
    <section
      className={`${styles.filter_modal_wrapper} ${
        filterModalState ? styles.show_modal : ""
      }`}
    >
      <div className={styles.clear_filters_btn}>
        <button className={`btn`}>Clear Filters</button>
      </div>
      <div>
        <p className={styles.filter_name}>Sort By Date</p>
        <div className={styles.input_group}>
          <input name="sortByDate" type="radio" id="Latest" value={"Latest"} />
          <label htmlFor="Latest">Latest</label>
        </div>
        <div className={styles.input_group}>
          <input name="sortByDate" type="radio" id="Oldest" value={"Oldest"} />
          <label htmlFor="Oldest">Oldest</label>
        </div>
      </div>
      <div>
        <p className={styles.filter_name}>Filters</p>
        <div className={styles.input_group}>
          <input
            name="filterByTrending"
            type="checkbox"
            id="trending"
            value={"Trending"}
          />
          <label htmlFor="trending">Trending</label>
        </div>
      </div>
    </section>
  );
};
