import React, { Fragment } from "react";
import loader from "./loader.gif";

export const Spinner = () => (
  <Fragment>
    <img
      src={loader}
      alt="loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </Fragment>
);

export default Spinner;
