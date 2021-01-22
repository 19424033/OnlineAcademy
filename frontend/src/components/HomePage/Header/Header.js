import { Input, Avatar, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import { useState, useContext } from "react";
import AppContext from "../../../utils/AppContext";

// import { HeartOutlined, BellOutlined} from "@ant-design/icons";
const { Search } = Input;

const menu = (
  <Menu>
    <Menu.ItemGroup title="Item 1">
      <Menu.Item key="0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
    </Menu.ItemGroup>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

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

  const login_register = () => {
    return (
      <ul>
        <li>
          <Link to="/login">Đăng Nhập</Link>
        </li>
        <li>
          <Link to="/register">Đăng Ký</Link>
        </li>
      </ul>
    );
  };

  const islogin = () => {
    return (
      <ul>
        <li>
          <Dropdown overlay={menu}>
            <div>
              <Avatar>{firstCharacter(nameUser)}</Avatar>
              <span> {nameUser}</span>
            </div>
          </Dropdown>
        </li>
        <li>
          <Link to="/" onClick={logOut}>
            Đăng Xuất
          </Link>
        </li>
      </ul>
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
              <ul>
                <li>
                  <i className="fa fa-question-circle"></i> WEB NÂNG CAO
                </li>
                <li>
                  <i className="fa fa-envelope-o"></i>hmbt93@gmail.com
                </li>
              </ul>
            </div>
            <div className="topbar-right">
              {checkLocalStorage ? islogin() : login_register()}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container clearfix">
            <div className="menu-logo">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "/logo.png"}
                  className="logo"
                  alt=""
                />
              </Link>
            </div>
            <button
              className="navbar-toggler collapsed menuicon justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#menuDropdown"
              aria-controls="menuDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="secondary-menu">
              <div className="secondary-inner">
                <ul>
                  <li className="search-btn">
                    <Search
                      placeholder="Tìm kiếm khoá học"
                      onSearch={onSearch}
                      enterButton
                      allowClear
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="menu-links navbar-collapse collapse justify-content-start"
              id="menuDropdown"
            >
              <div className="menu-logo">
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    className="logo"
                    alt=""
                  />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/">
                    Home <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    Pages <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="/">
                        About<i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about-1.html">About 1</a>
                        </li>
                        <li>
                          <a href="about-2.html">About 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        Event<i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="event.html">Event</a>
                        </li>
                        <li>
                          <a href="events-details.html">Events Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        FAQ's<i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="faq-1.html">FAQ's 1</a>
                        </li>
                        <li>
                          <a href="faq-2.html">FAQ's 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        Contact Us<i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="contact-1.html">Contact Us 1</a>
                        </li>
                        <li>
                          <a href="contact-2.html">Contact Us 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="portfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="membership.html">Membership</a>
                    </li>
                    <li>
                      <a href="error-404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                <li className="add-mega-menu">
                  <a href="/">
                    Our Courses <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu add-menu">
                    <li className="add-menu-left">
                      <h5 className="menu-adv-title">Our Courses</h5>
                      <ul>
                        <li>
                          <a href="courses.html">Courses </a>
                        </li>
                        <li>
                          <a href="courses-details.html">Courses Details</a>
                        </li>
                        <li>
                          <a href="profile.html">Instructor Profile</a>
                        </li>
                        <li>
                          <a href="event.html">Upcoming Event</a>
                        </li>
                        <li>
                          <a href="membership.html">Membership</a>
                        </li>
                      </ul>
                    </li>
                    <li className="add-menu-right">
                      <img src="assets/images/adv/adv.jpg" alt="" />
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    Blog <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="blog-classNameic-grid.html">
                        Blog ClclassNameic
                      </a>
                    </li>
                    <li>
                      <a href="blog-classNameic-sidebar.html">
                        Blog ClclassNameic Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-list-sidebar.html">Blog List Sidebar</a>
                    </li>
                    <li>
                      <a href="blog-standard-sidebar.html">
                        Blog Standard Sidebar
                      </a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-dashboard">
                  <a href="/">
                    Dashboard <i className="fa fa-chevron-down"></i>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="admin/index.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="admin/add-listing.html">Add Listing</a>
                    </li>
                    <li>
                      <a href="admin/bookmark.html">Bookmark</a>
                    </li>
                    <li>
                      <a href="admin/courses.html">Courses</a>
                    </li>
                    <li>
                      <a href="admin/review.html">Review</a>
                    </li>
                    <li>
                      <a href="admin/teacher-profile.html">Teacher Profile</a>
                    </li>
                    <li>
                      <a href="admin/user-profile.html">User Profile</a>
                    </li>
                    <li>
                      <a href="/">
                        Calendar<i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="admin/basic-calendar.html">Basic Calendar</a>
                        </li>
                        <li>
                          <a href="admin/list-view-calendar.html">
                            List View Calendar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        Mailbox<i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="admin/mailbox.html">Mailbox</a>
                        </li>
                        <li>
                          <a href="admin/mailbox-compose.html">Compose</a>
                        </li>
                        <li>
                          <a href="admin/mailbox-read.html">Mail Read</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="nav-social-link">
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a href="/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCustomize;
