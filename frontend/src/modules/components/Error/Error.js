import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
    console.log("object")
  return (
    <div class="account-form-inner">
      <div class="account-container">
        <div class="error-page">
          <h3>Ooopps :(</h3>
          <h2 class="error-title">404</h2>
          <h5>The Page you were looking for, couldn't be found.</h5>
          <p>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <div class="">
            <a href="index.html" class="btn m-r5">
              Preview
            </a>
            <a href="index.html" class="btn outline black">
              Back To Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
