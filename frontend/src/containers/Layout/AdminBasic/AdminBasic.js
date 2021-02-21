import React, { useContext } from "react";
import { Button, Layout, Menu } from "antd";
import "./AdminBasic.scss";
import {
  OrderedListOutlined,
  HomeOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {AppContext} from "../../../utils/AppContext";

const AdminBasic = ({ children }) => {
  const { checkLocalStorage, logOut } = useContext(AppContext);
  const history = useHistory();

  return (
    <Layout className="layout-admin">
      <Layout.Sider width={250}  height={"100%"}>
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
          {!checkLocalStorage ? (
            <Button type="primary" className="mr-5">
              <Link to="/login">Đăng Nhập</Link>
            </Button>
          ) : (
            <>
              <Button type="primary">Hà Minh Bảo Toàn</Button>
              <Link to="/" onClick={logOut}>
                <Button type="text" className="mr-4">
                  Log out
                </Button>
              </Link>
            </>
          )}
        </Layout.Header>
        <Layout.Content className="layoutContent-admin">
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default AdminBasic;
