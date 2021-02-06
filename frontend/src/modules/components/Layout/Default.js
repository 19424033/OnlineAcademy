import React from "react";

import HeaderCustomize from "../../components/Header/Header";
import FooterCustomize from "../../components/Footer/Footer";
import { Layout } from "antd";

const { Content } = Layout;
export const Default = (props) => {
  return (
    <>
      <HeaderCustomize />

      <Content style={{ padding: "150px 200px 0px 200px" }}>
        <Layout
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
      <FooterCustomize />
    </>
  );
};

export default Default;
