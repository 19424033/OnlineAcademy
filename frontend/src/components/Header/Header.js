import { Layout, Row, Col, Button, Input } from "antd";
import { Link } from "react-router-dom";

import {
  ShoppingCartOutlined,
  HeartOutlined,
  BellOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
const { Search } = Input;

const onSearch = (value) => console.log(value);

const HeaderCustomize = () => {
  return (
    <Header className="header">
      <div className="header_top">
        <ul className="menu_top">
          <li>
            <a href="/">Kích hoạt khóa học</a>
          </li>
          <li>
            <a href="/">Kiểm tra đơn hàng</a>
          </li>
          <li>
            <a href="/">Chăm sóc khách hàng</a>
          </li>
          <li>
            <a href="/">Trở thành giảng viên</a>
          </li>
          <li>
            <a href="/">Khóa học của tôi</a>
          </li>
        </ul>
      </div>

      <div className="header_main">
        <Row>
          <Col span={6}>
            <div className="header_main_logo">
            <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  className="logo"
                  alt=""
                />
              </Link>
            </div>
          </Col>

          <Col span={9}>
            <div className="header_main_search">
              <Search placeholder="tìm kiếm...." onSearch={onSearch} />
            </div>
          </Col>
          <Col span={4}>
            <div className="header_main_button">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                size={"large"}
              />

              <Button type="primary" icon={<HeartOutlined />} size={"large"} />
              <Button type="primary" icon={<BellOutlined />} size={"large"} />
            </div>
          </Col>
          <Col span={5}>
            <div className="header_main_user">
              <Link to="/login">
                <Button className="btn_academy btn_dangnhap">Đăng Nhập</Button>
              </Link>
              <Link to="/register">
                <Button danger className="btn_academy btn_dangky">Đăng Ký</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Header>
  );
};

export default HeaderCustomize;
