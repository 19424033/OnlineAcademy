import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../utils/AppContext";
import AuthService from "../../../services/auth.service";
import UserService from "../../../services/user.service";
import Products from "../../Products/Products";

const RegisteredCourse = () => {
  const { userid } = useContext(AppContext);
  const [coursesUser, setCoursesUser] = useState([]);
  useEffect(() => {
    UserService()
      .getCategorysUser(userid)
      .then((data) => {
        if (data.data === false) {
          setCoursesUser([]);
        } else {
          setCoursesUser(data.data);
        }
      });
  }, []);
  return (
    <div>
      <div className="profile-head">
        <h3>Khóa Học Đã Đăng Ký</h3>
      </div>
      <div className="courses-filter">
        <div className="clearfix">
          {coursesUser.length <= 0 ? (
            <p className="mt-3 text-center">Bạn chưa đăng kí khóa học nào</p>
          ) : (
            <div>
              {coursesUser.map((item, index) => {
                return <Products key={index} products={item} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisteredCourse;
