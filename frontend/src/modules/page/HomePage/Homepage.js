import HeaderCustomize from "../../components/Header/Header";
import React, { useContext, useState } from "react";

import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import OTP from "../OTPComfirm/OTP";
import AppContext from "../../../utils/AppContext";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const Homepage = () => {
  const { checkOTPConfim } = useContext(AppContext);

  return (
    <div>
      <HeaderCustomize />

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
