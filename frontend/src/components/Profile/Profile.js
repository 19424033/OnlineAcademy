import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";
import "./Profile.scss";
import AuthService from "../../services/auth.service";

import {
  Form,
  Input,
  Button,
  Checkbox,
  Alert,
  InputNumber,
  message,
} from "antd";
const Profile = () => {
  const { userid, profile, nameUser, setProfile, setnameUser,imageUser } = useContext(
    AppContext
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errorPasswordCurent, setErrorPasswordCurent] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState();
  const [errorPasswordNew, setErrorPasswordNew] = useState("");
  const [errorPasswordRe, setErrorPasswordRe] = useState("");
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
        setUserName(data.data.user[0].Dislayname);
      });
  };
  const openCourses = () => {
    setPasswordOpen(false);
    setProfileOpen(false);
    setCoursesOpen(true);
    setQuizOpen(false);
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
    let check = true;
    if (userName === "") {
      setErrorPasswordCurent("Nhập tên ");
      check = false;
    }
    if (userEmail === "") {
      setErrorPasswordNew("Nhập email ");
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
          setnameUser(data.data[0].Dislayname);
          if (data.data) {
            message.success("Cập nhập thông tin thành công");
          } else {
          }
        });
    }
  };
  return (
    <div className="row">
      <div
        className="col-lg-3 col-md-4 col-sm-12"
        style={{ background: "#fff" }}
      >
        <div className="profile-bx text-center">
          <div className="user-profile-thumb">
            <img src={`data:image/jpg;base64,${imageUser}`} alt="" />
          </div>
          <div className="profile-info">
            <h4>{nameUser}</h4>
            {/* <span>{userEmail}</span> */}
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
                  to="#courses"
                  onClick={openCourses}
                >
                  <i className="ti-book"></i>Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#quiz-results"
                  onClick={openQuiz}
                >
                  <i className="ti-bookmark-alt"></i>Quiz Results{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#edit-profile"
                  onClick={openChangeProfile}
                >
                  <i className="ti-pencil-alt"></i>Edit Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#change-password"
                  onClick={openChangePassWord}
                >
                  <i className="ti-lock"></i>Change Password
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-9 col-md-4 col-sm-12 profileUser">
        {passwordOpen && (
          <div className="Change_password">
            <div className="row">
              <div className="col-12 title">
                <h4>Thay đổi mật khẩu</h4>
              </div>
              <div className="col-4 mb-4 mt-3 pl-0 pr-0">
                <p className="title_change">Mật khẩu hiện tại</p>
              </div>
              <div className="col-8 mb-4 mt-3 ">
                <input
                  type="password"
                  className="input_password"
                  placeholder=""
                  onChange={handleInputCurrent}
                />
                {errorPasswordCurent != "" && (
                  <p style={{ color: "red" }}>{errorPasswordCurent}</p>
                )}
              </div>
              <div className="col-4  mb-4 pl-0 pr-0">
                <p className="title_change">Mật khẩu mới</p>
              </div>
              <div className="col-8  mb-4 ">
                <input
                  type="password"
                  className="input_password"
                  placeholder=""
                  onChange={handleInputNew}
                />
                {errorPasswordNew != "" && (
                  <p style={{ color: "red" }}>{errorPasswordNew}</p>
                )}
              </div>
              <div className="col-4 pl-0 pr-0 ">
                <p className="title_change">Nhập lại mật khẩu mới</p>
              </div>
              <div className="col-8">
                <input
                  type="password"
                  className="input_password"
                  placeholder=""
                  onChange={handleInputRe}
                />
                {errorPasswordRe != "" && (
                  <p style={{ color: "red" }}>{errorPasswordRe}</p>
                )}
              </div>
              <div className="col-4"></div>
              <div className="col-8">
                <div className="btn_change">
                  <Button type="primary" onClick={ChangePassWord}>
                    Thay đổi mật khẩu
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {profileUser && (
          <div className="Change_password">
            <div className="row">
              <div className="col-12 title">
                <h4>Thay đổi thông tin</h4>
              </div>
              <div className="col-4  mb-4 mt-3 pl-0 pr-0">
                <p className="title_change">Tên</p>
              </div>
              <div className="col-8  mb-4  mt-3">
                <input
                  type="text"
                  className="input_password"
                  placeholder=""
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errorPasswordCurent != "" && userName == "" && (
                  <p style={{ color: "red" }}>{errorPasswordCurent}</p>
                )}
              </div>
              <div className="col-4 pl-0 pr-0 ">
                <p className="title_change">Email</p>
              </div>
              <div className="col-8">
                <input
                  type="text"
                  className="input_password"
                  placeholder=""
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                {errorPasswordNew != "" && userEmail == "" && (
                  <p style={{ color: "red" }}>{errorPasswordNew}</p>
                )}
              </div>
              <div className="col-4"></div>
              <div className="col-8">
                <div className="btn_change">
                  <Button type="primary" onClick={changeProfile}>
                    Thay đổi thông tin
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
