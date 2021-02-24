import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";
import "./Profile.scss";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";

import { Button, message } from "antd";
const Profile = () => {
  const {
    userid,
    profile,
    nameUser,
    setProfile,
    setnameUser,
    imageUser,
  } = useContext(AppContext);
  console.log(imageUser);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorPasswordCurent, setErrorPasswordCurent] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState();
  const [errorPasswordNew, setErrorPasswordNew] = useState("");
  const [errorPasswordRe, setErrorPasswordRe] = useState("");
  const [favoriteCategory, setFavoriteCategory] = useState("");
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [profileUser, setProfileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const handleInputCurrent = (event) => {
    setCurrentPassword(event.target.value);
    if (currentPassword != "") {
      setErrorPasswordCurent("");
    }
  };
  const handleInputEmail = (event) => {
    setUserEmail(event.target.value);
    if (userEmail != "") {
      setUserEmail("");
    }
  };
  const handleInputUserName = (event) => {
    setUserName(event.target.value);
    if (userName != "") {
      setUserName("");
    }
  };
  const openChangePassWord = () => {
    setPasswordOpen(true);
    setProfileOpen(false);
    setCoursesOpen(false);
    setQuizOpen(false);
  };
  const openChangeProfile = () => {
    setPasswordOpen(false);
    setProfileOpen(true);
    setCoursesOpen(false);
    setQuizOpen(false);
    setErrorPasswordNew("");
    setErrorPasswordCurent("");

    let userdata = {
      userId: userid,
    };

    AuthService()
      .getProfile(userdata)
      .then((data) => {
        setProfile(data.data.user[0]);
        setUserEmail(data.data.user[0].Email);
        setUserName(data.data.user[0].DislayName);
      });
  };
  const openCourses = () => {
    setPasswordOpen(false);
    setProfileOpen(false);
    setCoursesOpen(true);
    setQuizOpen(false);
    let data = {
      userId: userid,
    };
    AuthService()
      .getAllFavoriteCategory(data)
      .then((data) => {
        if (data.data == false) {
          setFavoriteCategory("");
        } else {
          setFavoriteCategory(data.data);
        }
      });
  };
  const openQuiz = () => {
    setPasswordOpen(false);
    setProfileOpen(false);
    setCoursesOpen(false);
    setQuizOpen(true);
  };
  const handleInputNew = (event) => {
    setNewPassword(event.target.value);
    if (currentPassword === event.target.value) {
      setErrorPasswordNew("Mật khẩu mới không được giống mật khẩu hiện tại");
    } else {
      setErrorPasswordNew("");
    }
  };
  const handleInputRe = (event) => {
    setRePassword(event.target.value);
    if (newPassword != event.target.value) {
      setErrorPasswordRe("Mật khẩu không giống mật khẩu hiện mới");
    } else {
      setErrorPasswordRe("");
    }
  };
  const ChangePassWord = () => {
    let check = true;
    if (currentPassword == "") {
      setErrorPasswordCurent("Nhập mật khẩu hiện tại");
      check = false;
    }
    if (currentPassword == newPassword) {
      setErrorPasswordNew("Mật khẩu mới không được giống mật khẩu hiện tại");
      check = false;
    }
    if (newPassword == "") {
      setErrorPasswordNew("Nhập mật khẩu mới");
      check = false;
    }
    if (newPassword != rePassword) {
      setErrorPasswordNew("Nhập mật khẩu mới");
      check = false;
    }
    if (check == true) {
      let data = {
        Email: profile.Email,
        CurrentPassword: currentPassword,
        NewPassword: newPassword,
      };
      AuthService()
        .changePassword(data)
        .then((data) => {
          console.log(data);
          if (data.data) {
            message.success("Thay đổi mật khẩu thành công");
          } else {
            setErrorPasswordCurent("Mật khẩu hiện tại không đúng");
          }
        });
    }
  };
  const changeProfile = () => {
    var letter3 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let check = true;
    if (userEmail === "") {
      setErrorPasswordNew("Nhập email ");
      check = false;
    }
    if (userEmail.match(letter3) == null) {
      setErrorPasswordNew("Nhập sai địa chỉ email ");
      check = false;
    }
    if (userName === "") {
      setErrorPasswordCurent("Nhập tên ");
      check = false;
    }

    if (check == true) {
      let data = {
        userId: userid,
        userName: userName,
        Email: userEmail,
      };
      AuthService()
        .editProfile(data)
        .then((data) => {
          setProfile(data.data[0]);
          setnameUser(data.data[0].DislayName);
          if (data.data) {
            message.success("Cập nhập thông tin thành công");
          } else {
          }
        });
    }
  };
  return (
    <div class="page-content">
      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-3 col-md-4 col-sm-12"
                // style={{ background: "#fff" }}
              >
                <div className="profile-bx text-center">
                  <div className="user-profile-thumb">
                    <img src={`data:image/jpg;base64,${imageUser}`} alt="" />
                  </div>
                  <div className="profile-info">
                    <h4>{nameUser}</h4>
                    <span>{userEmail}</span>
                  </div>
                  <div className="profile-social">
                    <ul className="list-inline m-a0">
                      <li>
                        <Link to="#">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa fa-google-plus"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="profile-tabnav">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          data-toggle="tab"
                          onClick={openCourses}
                        >
                          <i className="ti-book"></i>Khóa học yêu thích
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          data-toggle="tab"
                          onClick={openQuiz}
                        >
                          <i className="ti-bookmark-alt"></i>Khóa học đã đăng kí{" "}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          data-toggle="tab"
                          onClick={openChangeProfile}
                        >
                          <i className="ti-pencil-alt"></i>Thay đổi thông tin
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          data-toggle="tab"
                          onClick={openChangePassWord}
                        >
                          <i className="ti-lock"></i>Thay đổi mật khẩu
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-4 col-sm-12">
                <div className="profile-content-bx">
                  <div className="tab-content">
                    {coursesOpen && (
                      <>
                        <div className="profile-head">
                          <h3>Khóa Học Yêu Thích</h3>
                        </div>
                        <div className="courses-filter">
                          <div className="clearfix">
                            {favoriteCategory === "" && (
                              <p className="mt-3 text-center">
                                Không có khóa học yêu thích nào
                              </p>
                            )}
                            {favoriteCategory != "" && (
                              <div>Danh sách khóa học</div>
                            )}
                          </div>
                        </div>
                      </>
                    )}
                    {/* <>
                      <div className="profile-head">
                        <h3>Khóa Học Đã Đăng Ký</h3>
                      </div>
                      <div className="courses-filter">
                        <div className="clearfix">
                          <p className="mt-3 text-center">
                            Không có khóa học yêu thích nào
                          </p>
                        </div>
                      </div>
                    </> */}
                    {passwordOpen && (
                      <>
                        <div class="profile-head">
                          <h3>Change Password</h3>
                        </div>
                        <div class="edit-profile">
                          <div class="form-group row">
                            <label class="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                              Mật khẩu hiện tại
                            </label>
                            <div class="col-12 col-sm-8 col-md-8 col-lg-7">
                              <input
                                type="password"
                                class="form-control"
                                placeholder=""
                                onChange={handleInputCurrent}
                              />
                              {errorPasswordCurent != "" && (
                                <p style={{ color: "red" }}>
                                  {errorPasswordCurent}
                                </p>
                              )}
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                              Mật khẩu mới
                            </label>
                            <div class="col-12 col-sm-8 col-md-8 col-lg-7">
                              <input
                                type="password"
                                class="form-control"
                                placeholder=""
                                onChange={handleInputNew}
                              />
                              {errorPasswordNew != "" && (
                                <p style={{ color: "red" }}>
                                  {errorPasswordNew}
                                </p>
                              )}
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-12 col-sm-4 col-md-4 col-lg-3 col-form-label">
                              {" "}
                              Nhập lại mật khẩu mới
                            </label>
                            <div class="col-12 col-sm-8 col-md-8 col-lg-7">
                              <input
                                type="password"
                                class="form-control"
                                placeholder=""
                                onChange={handleInputRe}
                              />
                              {errorPasswordRe != "" && (
                                <p style={{ color: "red" }}>
                                  {errorPasswordRe}
                                </p>
                              )}
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-12 col-sm-4 col-md-4 col-lg-3"></div>
                            <div class="col-12 col-sm-8 col-md-8 col-lg-7">
                              <button className="btn" onClick={ChangePassWord}>
                                Thay đổi mật khẩu
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {profileUser && (
                      <>
                        <div className="profile-head">
                          <h3>Thay đổi thông tin</h3>
                        </div>
                        <div className="edit-profile">
                          <div className="">
                            <div className="form-group row">
                              <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                                Họ Và Tên
                              </label>
                              <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  value={userName}
                                  onChange={(e) => setUserName(e.target.value)}
                                />
                                {errorPasswordCurent != "" &&
                                  userName == "" && (
                                    <p style={{ color: "red" }}>
                                      {errorPasswordCurent}
                                    </p>
                                  )}
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-12 col-sm-3 col-md-3 col-lg-2 col-form-label">
                                Email
                              </label>
                              <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control"
                                  value={userEmail}
                                  onChange={(e) => setUserEmail(e.target.value)}
                                />
                                {errorPasswordNew != "" && userEmail == "" && (
                                  <p style={{ color: "red" }}>
                                    {errorPasswordNew}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12 col-sm-3 col-md-3 col-lg-2"></div>
                              <div className="col-12 col-sm-9 col-md-9 col-lg-7">
                                <button className="btn" onClick={changeProfile}>
                                  Thay đổi thông tin
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
