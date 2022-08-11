import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {
  BookmarksPage,
  DetailedPostPage,
  ExplorePage,
  HomePage,
  LandingPage,
  NotificationPage,
  PageNotFound,
  ProfilePage,
} from "../pages";
export const Routers = () => {
  return (
    <>
     <ToastContainer />
      <Routes>
        <Route path={`/`} element={<LandingPage />} />
        <Route path={`/home`} element={<HomePage />} />
        <Route path={`/profile`} element={<ProfilePage />} />
        <Route path={`/explore`} element={<ExplorePage />} />
        <Route path={`/bookmarks`} element={<BookmarksPage />} />
        <Route path={`/posts/:id`} element={<DetailedPostPage />} />
        <Route path={`/notifications`} element={<NotificationPage />} />
        <Route path={`*`} element={<PageNotFound />} />
      </Routes>
    </>
  );
};
