import "antd/dist/antd.css";
import "./assets/css/global.scss";
import React, { useState } from "react";
import HeaderCustomize from "./components/Header/Header";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
function App() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapsed = () => setCollapsed(!collapsed);
  return (
    <Router>
      <Layout>
        <HeaderCustomize />
        <Content style={{ padding: "150px 200px 0px 200px" }}>
          <Switch>
            <Route path="/login">
            <Login/>
            </Route>
            <Route path="/register">
            register
            </Route>
            <Route path="/">
              <Layout
                className="site-layout-background"
                style={{ padding: "24px 0" }}
              >
                <Sider className="site-layout-background" width={200}>
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    defaultOpenKeys={["sub1"]}
                    style={{ height: "100%" }}
                  >
                    <SubMenu
                      key="sub1"
                      icon={<UserOutlined />}
                      title="subnav 1"
                    >
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
                <Content style={{ padding: "0 24px", minHeight: 280 }}>
                  Content
                </Content>
              </Layout>
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
