import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import CategoryService from "../../../../services/category.service";
const Detail = () => {
  let { CategoryID } = useParams();
  const [categories, setCategories] = useState();
  useEffect(() => {
    CategoryService()
      .getSingleCategory(CategoryID.split("-", 1))
      .then(
        (response) => {
          setCategories(response.data);
          console.log(response.data);
        },
        (error) => {}
      );
  }, []);
  return (
    <div className="page-content bg-white">
      <div className="content-block">
        <div className="section-area section-sp1">
          <div className="container">
            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to="/manager/course">Quản Lý Khóa Học</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{CategoryID.split("-", 2)[1]}</Breadcrumb.Item>
            </Breadcrumb>
            {categories ? <img src={categories.Image}></img> : ""}
            {/* <BuyCourses categories={categories} />  
                  <Detail id = {id} categories={categories} />   */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
