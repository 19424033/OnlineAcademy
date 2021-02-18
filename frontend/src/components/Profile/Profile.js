import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../utils/AppContext";
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
  const { userid, profile } = useContext(AppContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorPasswordCurent, setErrorPasswordCurent] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState();
  const [errorPasswordNew, setErrorPasswordNew] = useState("");
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
    setUserEmail(profile.Email);
    setUserName(profile.Dislayname);
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
  const ChangePassWord = () => {
    let check = true;
    if (currentPassword === "") {
      setErrorPasswordCurent("Nhập mật khẩu hiện tại");
      check = false;
    }
    if (currentPassword === newPassword) {
      setErrorPasswordNew("Mật khẩu mới không được giống mật khẩu hiện tại");
      check = false;
    }
    if (newPassword === "") {
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
    if (userName === "") {
      setErrorPasswordCurent("Nhập tên ");
    }
    if (userEmail === "") {
      setErrorPasswordNew("Nhập email ");
    }
  };
  return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
        <div className="profile-bx text-center">
          <div className="user-profile-thumb">
            <img src="assets/images/profile/pic1.jpg" alt="" />
          </div>
          <div className="profile-info">
            <h4>{profile.Dislayname}</h4>
            <span>{profile.Email}</span>
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
      <div className="col-lg-9 col-md-4 col-sm-12 m-b30 profileUser">
        {passwordOpen && (
          <div className="Change_password">
            <h4>Thay đổi mật khẩu</h4>
            <p className="title_change">Mật khẩu hiện tại</p>
            <input
              type="password"
              className="input_password"
              placeholder=""
              onChange={handleInputCurrent}
            />
            {errorPasswordCurent != "" && (
              <p style={{ color: "red" }}>{errorPasswordCurent}</p>
            )}
            <p className="title_change">Mật khẩu mới</p>
            <input
              type="password"
              className="input_password"
              placeholder=""
              onChange={handleInputNew}
            />
            {errorPasswordNew != "" && (
              <p style={{ color: "red" }}>{errorPasswordNew}</p>
            )}
            <div className="btn_change">
              <Button type="primary" onClick={ChangePassWord}>
                Thay đổi mật khẩu
              </Button>
            </div>
          </div>
        )}
        {profileUser && (
          <div className="Change_password">
            <h4>Thay đổi thông tin</h4>
            <p className="title_change">Tên</p>
            <input
              type="text"
              className="input_password"
              placeholder=""
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            {errorPasswordCurent != "" && (
              <p style={{ color: "red" }}>{errorPasswordCurent}</p>
            )}
            <p className="title_change">Email</p>
            <input
              type="text"
              className="input_password"
              placeholder=""
              value={userEmail}
              onChange={handleInputEmail}
            />
            {errorPasswordNew != "" && (
              <p style={{ color: "red" }}>{errorPasswordNew}</p>
            )}
            <div className="btn_change">
              <Button type="primary" onClick={changeProfile}>
                Thay đổi thông tin
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
