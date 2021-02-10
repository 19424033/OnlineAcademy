import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>

      <div className="col-lg-3 col-md-4 col-sm-12 m-b30">
        <div className="profile-bx text-center">
          <div className="user-profile-thumb">
            <img src="assets/images/profile/pic1.jpg" alt="" />
          </div>
          <div className="profile-info">
            <h4>Mark Andre</h4>
            <span>mark.example@info.com</span>
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
                >
                  <i className="ti-book"></i>Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#quiz-results"
                >
                  <i className="ti-bookmark-alt"></i>Quiz Results{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#edit-profile"
                >
                  <i className="ti-pencil-alt"></i>Edit Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  data-toggle="tab"
                  to="#change-password"
                >
                  <i className="ti-lock"></i>Change Password
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    
 </>
  );
};

export default Profile;
