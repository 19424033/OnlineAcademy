import { Input, Avatar, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { useState, useContext } from "react";
import AppContext from "../../../utils/AppContext";
import { SearchOutlined } from '@ant-design/icons';

// import { HeartOutlined, BellOutlined} from "@ant-design/icons";
const { Search } = Input;

const HeaderCustomize = () => {
  const {
    nameUser,
    setnameUser,
    saveToken,
    checkLocalStorage,
    setCheckLocalStorage,
    setCheckOTPConfim
  } = useContext(AppContext);
  // console.log(nameUser)
  const logOut = () => {
    setnameUser(undefined);
    saveToken(undefined);
    setCheckLocalStorage(false);
    setCheckOTPConfim(undefined);

    AuthService().logout();  
  };
  const onSearch = (value) => console.log(value);
  const firstCharacter = (x) => {
    if (x) return x[0].toUpperCase();
    return x;
  };

  const menu = (
    <Menu style={{ width: 130 }}  >
      <Menu.Item>
        <Link to="/">
          <h6>
            <i className="fa fa-user "/> Hồ Sơ
          </h6>
        </Link>
      </Menu.Item>
      <Menu.Item>
      <Link to="/" onClick={logOut}>
        <h6>
          <i className="dropdown-icon mdi mdi-logout-variant fs-30 m-0 leading-tight"/>   Đăng Xuất
        </h6>
        </Link>

      </Menu.Item>
    </Menu>
  );

  const login_register = () => {
    return (
      <div className="d-flex align-items-stretch ">
        <div className="pt-btn-join ">
          <Link to="/login" className="btn-nocolor radius-xl">Đăng Nhập</Link>
        </div>
        <div className="pt-btn-join">
          <Link to="/register" className="btn-color radius-xl">Đăng Ký</Link>
        </div>
      </div>
    );
  };

  const islogin = () => {
    return (
      <div>
        <Link to="/" className="text-white">
          <h6>
            <i className="fa fa-heart-o" />  Yêu thích
          </h6>
        </Link>
        <Link to="/" className="text-white">
          <h6>
            <i className="typcn typcn-chevron-right-outline" />  Khóa học của tôi
          </h6>
        </Link>
        <Dropdown overlay={menu} >
          <Avatar size="large" src="assets/images/testimonials/pic3.jpg" />
        </Dropdown>
      </div>
    );
  };

  return (
    // <Header className="header">

    //   <div className="header_top">
    //     <ul className="menu_top">
    //       <li>
    //         <a href="/">Kích hoạt khóa học</a>
    //       </li>
    //       <li>
    //         <a href="/">Kiểm tra đơn hàng</a>
    //       </li>
    //       <li>
    //         <a href="/">Chăm sóc khách hàng</a>
    //       </li>
    //       <li>
    //         <a href="/">Trở thành giảng viên</a>
    //       </li>
    //       <li>
    //         <a href="/">Khóa học của tôi</a>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="header_main">
    //     <Row>
    //       <Col span={6}>
    //         <div className="header_main_logo">
    //           <Link to="/">
    //             <img
    //               src={process.env.PUBLIC_URL + "/logo.png"}
    //               className="logo"
    //               alt=""
    //             />
    //           </Link>
    //         </div>
    //       </Col>

    //       <Col span={8}>
    //         <div className="header_main_search">
    //           <Search placeholder="tìm kiếm...." onSearch={onSearch} />
    //         </div>
    //       </Col>
    //       <Col span={3}>
    //         <div className="header_main_button">
    //           <Button
    //             type="primary"
    //             icon={<ShoppingCartOutlined />}
    //             size={"large"}
    //           />

    //           <Button type="primary" icon={<HeartOutlined />} size={"large"} />
    //           <Button type="primary" icon={<BellOutlined />} size={"large"} />
    //         </div>
    //       </Col>
    //       <Col span={7}>
    //         <div className="header_main_user">
    //           <Link to="/login">
    //             <Button className="btn_academy btn_dangnhap">Đăng Nhập</Button>
    //           </Link>
    //           <Link to="/register">
    //             <Button danger className="btn_academy btn_dangky ml-3">
    //               Đăng Ký
    //             </Button>
    //           </Link>
    //           <div className="topZindex">
    //             <Dropdown overlay={menu}>
    //               <Button className="btn_academy ml-3" icon={<UserOutlined />}>
    //                 haminhbaotoan
    //               </Button>
    //             </Dropdown>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </Header>
    <div className="header rs-nav header-transparent">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="topbar-left">
              <div className="menu-logo">
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    className="logo"
                    alt=""
                  />
                </Link>
                <div className="ttr-search-input-wrapper">
                  <input type="text" name="qq" placeholder="Tìm kiếm khóa học..." className="ttr-search-input" />
                  <button type="submit" name="search" className="ttr-search-submit"><i className="fa fa-search" /></button>
                </div>
              </div>
              <Link to="/" className="text-white">
                <h6>
                  <i className="typcn typcn-point-of-interest-outline" />   Danh Mục
                </h6>
              </Link>
            </div>
            <div className="topbar-right">
              {checkLocalStorage ?  islogin() : login_register() }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustomize;
