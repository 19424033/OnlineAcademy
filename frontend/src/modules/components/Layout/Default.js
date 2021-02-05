import React from "react";

import HeaderCustomize from "../../components/Header/Header";
import FooterCustomize from "../../components/Footer/Footer";

export const Default = (props) => {
  return (
    <>
      <HeaderCustomize />
      {props.children}
      <FooterCustomize />
    </>
  );
};

export default Default;
