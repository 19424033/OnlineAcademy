import HeaderCustomize from "../../components/Header/Header";
import FooterCustomize from "../../components/Footer/Footer";
import ProductsCustomize from "../../components/Products/Products";
import React, { useContext, useState } from "react";

import { Layout } from "antd";
import OTP from "../OTPComfirm/OTP";
import AppContext from "../../../utils/AppContext";

const { Content } = Layout;
const Homepage = () => {
  const { checkOTPConfim } = useContext(AppContext);

  return (
    <div>
    	<HeaderCustomize/>
      <ProductsCustomize/>
    	<FooterCustomize/>

      <Content style={{ padding: "150px 200px 0px 200px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {localStorage.AcademyOnline_Token}

            {checkOTPConfim === false ? <OTP /> : ""}
          </Content>
        </Layout>
      </Content>
    </div>
  );
};

export default Homepage;
