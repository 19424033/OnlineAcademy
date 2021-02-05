import { Input, Avatar, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { useContext } from "react";
import AppContext from "../../../utils/AppContext";

// import { HeartOutlined, BellOutlined} from "@ant-design/icons";
const { Search } = Input;

const HeaderCustomize = () => {
  const {
    nameUser,
    setnameUser,
    saveToken,
    checkLocalStorage,
    setCheckLocalStorage,
    setCheckOTPConfim,
  } = useContext(AppContext);
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
    <Menu style={{ width: 180 }} className="mt-3 px-2">
      <Menu.Item>
        <Link to="/profile">
          <h6>
            <i className="fa fa-user mr-1" />
            {nameUser}
          </h6>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/" onClick={logOut}>
          <h6>
            <i className="dropdown-icon mdi mdi-logout-variant fs-30 mr-1 leading-tight" />
            Đăng Xuất
          </h6>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const login_register = () => {
    return (
      <div className="d-flex align-items-stretch ">
        <div className="pt-btn-join ">
          <Link to="/login" className="btn-nocolor radius-xl">
            Đăng Nhập
          </Link>
        </div>
        <div className="pt-btn-join">
          <Link to="/register" className="btn-color radius-xl">
            Đăng Ký
          </Link>
        </div>
      </div>
    );
  };

  const islogin = () => {
    return (
      <div>
        <Link to="/" className="text-white">
          <h6>
            <i className="fa fa-heart-o" /> Yêu thích
          </h6>
        </Link>
        <Link to="/" className="text-white">
          <h6>
            <i className="typcn typcn-chevron-right-outline" /> Khóa học của tôi
          </h6>
        </Link>
        <Dropdown overlay={menu}>
          <Link className="ant-dropdown-link text-white" to="/profile">
            <Avatar size="large" src="assets/images/testimonials/pic3.jpg" />
          </Link>
        </Dropdown>
      </div>
    );
  };

  return (
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
              </div>

              <div className="ttr-search-input-wrapper">
                <input
                  type="text"
                  name="qq"
                  placeholder="Tìm kiếm khóa học..."
                  className="ttr-search-input"
                />
                <button
                  type="submit"
                  name="search"
                  className="ttr-search-submit"
                >
                  <i className="fa fa-search" />
                </button>
              </div>
             
            </div>
            <div className="topbar-right">
            <Link to="/" className="text-white ml-3">
                <h6>
                  <i className="typcn typcn-point-of-interest-outline" /> Danh
                  Mục
                </h6>
              </Link>
              {checkLocalStorage ? islogin() : login_register()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustomize;
