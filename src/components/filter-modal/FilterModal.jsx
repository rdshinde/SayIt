import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilters } from "../../store/post/post-slice";
import styles from "./filter-modal.module.css";
export const FilterModal = ({
  data: { filterModalState, modalStateHandler },
}) => {
  const filterState = useSelector((state) => state.posts.sortBy);
  const dispatch = useDispatch();

  const closeFilterModalHandler = () => {
    modalStateHandler((prev) => !prev);
  };
  const clearFiltersHandler = () => {
    dispatch(addFilters("CLEAR_FILTERS"));
    closeFilterModalHandler();
  };
  return (
    <section
      className={`${styles.filter_modal_wrapper} ${
        filterModalState ? styles.show_modal : ""
      }`}
    >
      <div className={styles.clear_filters_btn}>
        <button className={`btn`} onClick={clearFiltersHandler}>
          Clear Filters
        </button>
      </div>
      <div>
        <p className={styles.filter_name}>Sort By Date</p>
        <div className={styles.input_group}>
          <input
            name="sortByDate"
            type="radio"
            checked={filterState === "LATEST_POSTS"}
            onChange={() => dispatch(addFilters("LATEST_POSTS"))}
            id="Latest"
            value={"Latest"}
          />
          <label htmlFor="Latest">Latest</label>
        </div>
        <div className={styles.input_group}>
          <input
            name="sortByDate"
            type="radio"
            checked={filterState === "OLDEST_POSTS"}
            onChange={() => dispatch(addFilters("OLDEST_POSTS"))}
            id="Oldest"
            value={"Oldest"}
          />
          <label htmlFor="Oldest">Oldest</label>
        </div>
      </div>
      <div>
        <p className={styles.filter_name}>Filters</p>
        <div className={styles.input_group}>
          <input
            name="filterByTrending"
            type="radio"
            id="trending"
            value={"Trending"}
            checked={filterState === "TRENDING_POSTS"}
            onChange={() => dispatch(addFilters("TRENDING_POSTS"))}
          />
          <label htmlFor="trending">Trending</label>
        </div>
      </div>
    </section>
  );
};
