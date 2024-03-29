import React from "react";
import { SetDocumentTitle } from "../../utils";
import { PageLayout } from "../page-layout/PageLayout";

export const PageNotFound = () => {
  SetDocumentTitle("Error 404! | SayIt");
  return (
    <>
      <PageLayout>
        <div style={{ textAlign: "center" }}>
          <h2>Error 404!</h2>
          <p className="text-3">This page is not available.</p>
          <button className="btn btn-primary-outline">Go to Homepage</button>
        </div>
      </PageLayout>
    </>
  );
};
