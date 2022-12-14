import React from "react";
import { Breadcrumb } from "react-bootstrap";

export const PageBreadcrumbs = ({ page }) => {
  return (
    <Breadcrumb style={{ marginTop: "50px" }}>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};
