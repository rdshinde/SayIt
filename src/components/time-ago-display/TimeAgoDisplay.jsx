import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
export const TimeAgoDisplay = ({ time }) => {
  TimeAgo.locale(en);
  const timeAgo = new TimeAgo("en-US");
  return <>{`${timeAgo.format(new Date(time * 1000))}`}</>;
};
