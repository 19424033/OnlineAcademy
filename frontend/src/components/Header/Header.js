import { useContext } from "react";
import { Input, Avatar, Dropdown, Menu, notification } from "antd";
import { Link } from "react-router-dom";

import AuthService from "../../services/auth.service";
import { AppContext } from "../../utils/AppContext";
import { parseAccessToken } from "../../utils/utils";

const { Search } = Input;

const HeaderCustomize = () => {
  const {
    nameUser,
    imageUser,
    setnameUser,
    saveToken,
    checkLocalStorage,
    setCheckLocalStorage,
    setCheckOTPConfim,
    logOut,
  } = useContext(AppContext);

  const onSearch = (value) => console.log(value);
  const firstCharacter = (x) => {
    if (x) return x[0].toUpperCase();
    return x;
  };

  const menu = (
    <Menu style={{ width: 180 }} className="mt-3 px-2">
      <Menu.Item>
        <Link to="/admin/user" >
          <h6>
            <i className="fa fa-home mr-1" />
            Go page Admin
          </h6>
        </Link>
      </Menu.Item>

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
      <>
        <li>
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
        </li>
      </>
    );
  };

  const islogin = () => {
    const tokenString = parseAccessToken(
      localStorage.getItem("AcademyOnline_Token")
    );
    if (tokenString) {
      console.log(tokenString.exp * 1000 - Date.now());
      setTimeout(() => {
        notification["warning"]({
          message: "Phiên đăng nhập đã hết hạn vui lòng đăng nhập lại",
        });
        logOut();
      }, tokenString.exp * 1000 - Date.now());
    }

    return (
      <>
        <li>
          <Link to="/" className="text-white">
            <span className="h6">
              <i style={{ marginLeft: "20px" }} className="fa fa-heart-o" /> Yêu
              thích
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <span className="h6">
              <i
                style={{ marginLeft: "20px" }}
                className="typcn typcn-chevron-right-outline"
              />{" "}
              Khóa học của tôi
            </span>
          </Link>
        </li>
        <li>
          <Dropdown overlay={menu}>
            <Link className="ant-dropdown-link text-white" to="/profile">
              <Avatar size="large" src={`data:image/jpg;base64,${imageUser}`}
              />
            </Link>
          </Dropdown>
        </li>
      </>
    );
  };

  return (

    <header className="header rs-nav header-transparent">
      <div className="top-bar">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="topbar-left">
              <div className="menu-logo">
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    // {imageUser}
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
              <ul>
                <li>
                  <Link to="/category" className="text-white ">
                    <span className="h6">
                      <i
                        style={{ marginLeft: "20px" }}
                        className="typcn typcn-point-of-interest-outline"
                      />{" "}
                      Danh Mục
                    </span>
                  </Link>
                </li>
                {checkLocalStorage ? islogin() : login_register()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderCustomize;
