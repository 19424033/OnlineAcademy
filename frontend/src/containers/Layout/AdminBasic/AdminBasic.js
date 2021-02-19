import React from "react";
import { Button, Layout, Menu } from "antd";
import "./AdminBasic.scss";
import {
  OrderedListOutlined,
  HomeOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const AdminBasic = ({ children }) => {
  const history = useHistory();

  return (
    <Layout className="layout-admin">
      <Layout.Sider width={250}>
        <Link to="/admin/user" className="logo-admin">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            width="200"
            alt="logo"
          />
        </Link>
        <Menu theme="dark" defaultSelectedKeys={["managerUser"]}>
          <Menu.Item
            key="managerUser"
            icon={<HomeOutlined />}
            onClick={() => history.push("/admin/user")}
          >
            Học viên và giảng viên
          </Menu.Item>
          <Menu.Item
            key="categories"
            icon={<OrderedListOutlined />}
            onClick={() => history.push("/admin/categories")}
          >
            Lĩnh vực
          </Menu.Item>
          <Menu.Item
            key="source"
            icon={<ReadOutlined />}
            onClick={() => history.push("/admin/source")}
          >
            Khoá học
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className="header-admin">
          <Button type="primary">Hà Minh Bảo Toàn</Button>
          <Button
            type="text"
            //    onClick={() => auth.logout()}
          >
            Log out
          </Button>
        </Layout.Header>
        <Layout.Content className="layoutContent-admin">
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default AdminBasic;
