import React from "react";
import Slide from "./Slide/Slide"
import Page from "./Page/Page"

const Homepage = () => {
  return (
    <div>
      <Slide/>
      <Page title='yeuthichnhat' />
      <Page title='xemnhieunhat' />
      <Page title='muanhieunhat' />
      <Page title='moinhat' />
    </div>
  );
};

export default Homepage;
