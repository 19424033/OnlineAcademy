import { List, Rate, Button, notification } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import { EyeInvisibleOutlined, EyeFilled } from "@ant-design/icons";
import { formatMoney } from "../../../utils/utils";
import CategoryService from "../../../services/category.service";

const Source = ({ datasource, APIgetCategoryByUserID }) => {
    console.log(datasource)
  const handleProduct = (category, setEnable, setDisable, upDatecategory) => {
    if (setEnable === true) {
      CategoryService()
        .setSingleCategory(category.CategoryId, {
          IsActive: 1,
        })
        .then((response) => {
          notification.success({
            message: "Hoàn Tất",
            description: "Bạn đã sửa thành công",
            placement: "bottomLeft",
          });
          APIgetCategoryByUserID();
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (setDisable === true) {
      CategoryService()
        .setSingleCategory(category.CategoryId, {
          IsActive: 0,
        })
        .then((response) => {
          notification.success({
            message: "Hoàn Tất",
            description: "Bạn đã sửa thành công",
            placement: "bottomLeft",
          });
          APIgetCategoryByUserID();
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (upDatecategory === true) {
    }
  };
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={datasource}
      renderItem={(item) => (
        <div className="card-courses-list admin-courses">
          <div className="card-courses-media">
            <img src={item.categoryImage} alt="" />
          </div>
          <div className="card-courses-full-dec">
            <div className="card-courses-title">
              <h4>
                <Link
                  to={`/courses-edit/${item.CategoryId}-${item.CategoryName}`}
                >
                  {item.CategoryName}
                </Link>
              </h4>
            </div>
            <div className="card-courses-list-bx">
              <ul className="card-courses-view">
                <li className="card-courses-user">
                  <div className="card-courses-user-info">
                    <h5>Teacher</h5>
                    <h4>{item.NameTeacher}</h4>
                  </div>
                </li>
                <li className="card-courses-categories">
                  <h5>Categories</h5>
                  <h4>{item.CategoryGroupName}</h4>
                </li>
                <li className="card-courses-categories">
                  <h5>Joiner</h5>
                  <h4>
                    {item.QuanRes} <i className="fa fa-user" />
                  </h4>
                </li>
                <li className="card-courses-review">
                  <h5>Review</h5>
                  <Rate allowHalf disabled defaultValue={item.Rate} />{" "}
                  {item.Rate}/5
                </li>
                <li className="card-courses-price">
                  <del>{formatMoney(item.Price)}</del>
                  <h5 className="text-primary">{formatMoney(item.Price)}</h5>
                </li>
                <li>
                  {item.IsActive ? (
                    <Button
                      type="primary"
                      className="mx-2"
                      shape="round"
                      onClick={() => handleProduct(item, false, true, false)}
                      icon={<EyeFilled />}
                    />
                  ) : (
                    <Button
                      type="default"
                      className="mx-2"
                      shape="round"
                      onClick={() => handleProduct(item, true, false, false)}
                      icon={<EyeInvisibleOutlined />}
                    />
                  )}
                </li>
              </ul>
            </div>
            <div className="row card-courses-dec">
              <div className="col-md-12">
                <h6 className="m-b10">Course Description</h6>
                <p>{item.Note}</p>
              </div>
              {/* <div className="col-md-12">
                                <a href="#" className="btn green radius-xl outline">Approve</a>
                                <a href="#" className="btn red outline radius-xl ">Cancel</a>
                            </div> */}
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default Source;
