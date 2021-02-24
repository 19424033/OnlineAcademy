import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../../utils/AppContext";
import AuthService from "../../../services/auth.service";

const FavorCourse = () => {
  const { userid } = useContext(AppContext);
  const [favoriteCategory, setFavoriteCategory] = useState("");
  useEffect(() => {
    AuthService()
      .getAllFavoriteCategory({
        userId: userid,
      })
      .then((data) => {
        if (data.data === false) {
          setFavoriteCategory("");
        } else {
          setFavoriteCategory(data.data);
        }
      });
  }, []);

  return (
    <>
      <div className="profile-head">
        <h3>Khóa Học Yêu Thích</h3>
      </div>
      <div className="courses-filter">
        <div className="clearfix">
          {favoriteCategory === "" ? (
            <p className="mt-3 text-center">Không có khóa học yêu thích nào</p>
          ) : (
            <div>Danh sách khóa học</div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavorCourse;
