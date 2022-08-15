import React, { Fragment } from "react";
import { ShimmerCategoryItem } from "react-shimmer-effects";

export const FollowUserShimmerLoader = () => {
  return (
    <Fragment>
      <ShimmerCategoryItem
        hasImage
        imageType="circular"
        imageWidth={50}
        imageHeight={50}
        title
      />
    </Fragment>
  );
};
