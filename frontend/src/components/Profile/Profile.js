import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/AppContext";
import "./Profile.scss";
import AuthService from "../../services/auth.service";

import ChangeProfileUser from "./Handle/ChangeProfileUser";
import ChangePassword from "./Handle/ChangePassword";
import FavorCourse from "./Handle/FavorCourse";
import RegisteredCourse from "./Handle/RegisteredCourse";
const Profile = () => {
  const { userid, nameUser, imageUser, userJobId, } = useContext(AppContext);
  const [userEmail, setUserEmail] = useState("");
  const [render, setRender] = useState("FavorCourse");

  useEffect(() => {
    AuthService()
      .getProfile({
        userId: userid,
      })
      .then((data) => {
        setUserEmail(data.data.user[0].Email);
      });
  }, []);

  return (
    <div class="page-content">
      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="profile-bx text-center">
                  <div className="user-profile-thumb">
                    <img src={`data:image/jpg;base64,${imageUser}`} alt="" />
                  </div>
                  <div className="profile-info">
                    <h4>{nameUser}</h4>
                    <span>{userEmail}</span>
                  </div>
                  <div className="profile-social"></div>
                  <div className="profile-tabnav">
                    <ul className="nav nav-tabs">
                      {userJobId === 2 && (
                        <>
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              data-toggle="tab"
                              onClick={() => setRender("FavorCourse")}
                            >
                              <i className="ti-book"></i>
                              Khóa học yêu thích
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link"
                              data-toggle="tab"
                              onClick={() => setRender("RegisteredCourse")}
                            >
                              <i className="ti-bookmark-alt"></i>
                              Khóa học đã đăng kí
                            </Link>
                          </li>
                        </>
                      )}
                      {userJobId === 3 && (
                        <>
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              data-toggle="tab"
                              // onClick={openCourses}
                            >
                              <i className="ti-book"></i>
                              Tạo khóa học
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link active"
                              data-toggle="tab"
                              // onClick={openCourses}
                            >
                              <i className="ti-book"></i>
                              Tạo khóa học
                            </Link>
                          </li>
                        </>
                      )}
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          data-toggle="tab"
                          onClick={() => setRender("ChangeProfileUser")}
                        >
                          <i className="ti-pencil-alt"></i>
                          Thay đổi thông tin
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          data-toggle="tab"
                          onClick={() => setRender("ChangePassword")}
                        >
                          <i className="ti-lock"></i>
                          Thay đổi mật khẩu
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-4 col-sm-12">
                <div className="profile-content-bx">
                  <div className="tab-content">
                    {userJobId === 2 && render === "FavorCourse" && (
                      <FavorCourse />
                    )}
                    {userJobId === 2 && render === "RegisteredCourse" && (
                      <RegisteredCourse />
                    )}
                    {render === "ChangeProfileUser" && <ChangeProfileUser setUserEmail={setUserEmail} />}
                    {render === "ChangePassword" && <ChangePassword userEmail={userEmail} />}
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
