import React, { useState, useEffect } from "react";
import { Image, Row, Col, Input, Button, Modal, notification } from "antd";
import {
  SearchOutlined,
  UnlockOutlined,
  DeleteOutlined,
  LockOutlined,
  EditOutlined,
  ExclamationCircleOutlined
} from "@ant-design/icons";
import CategorygroupService from "../../../services/categorygroup.service";
import ModalForm from "./Modal_Add_CategoryGroup";
import './ManagerCategories.scss'
var dateFormat = require("dateformat");
const { confirm } = Modal;

const ManagetUser = () => {
  const [Content, setContent] = useState()
  const [dataRespon, setdataRespon] = useState([])
  const [dataRespontemp, setdataRespontemp] = useState([])
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    APIgetAllCategoryGroup();
  }, []);

  const APIgetAllCategoryGroup = () => {
    CategorygroupService().getAllCategorygroup()
      .then((response) => {
        setdataRespon(response.data);
        setdataRespontemp(response.data)
      }, (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
      );
  }
  const txt_Changed = function (e) {
    const temp = dataRespon.filter((item) =>
      item.CategoryGroupname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setdataRespontemp(temp);
  };
  const onCreate = (values) => {
    values.Created_at = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
    CategorygroupService().addCategorygroup(values)
      .then((response) => {
        setVisible(false);
        APIgetAllCategoryGroup();
      }, (error) => {

      }
      );
  };

  function showDeleteConfirm(item) {
    confirm({
      title: `Bạn có chắc muốn xoá ${item.CategoryGroupname} ?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        CategorygroupService().deleteSingleCatagoryGroup(item.CategoryGroupid)
          .then((response) => {
            APIgetAllCategoryGroup();
            notification["success"]({
              message: "Hoàn Tất",
              description: "bạn đã xoá thành công",
            });
          })
          .catch(function (error) {
            console.log("ERROR from server:", error);
          });
      },
      onCancel() { },
    });
  }
  const handleProduct = (categoryGroup, setEnable, setDisable, upDatecategoryGroup) => {
    if (setEnable === true) {
      CategorygroupService()
        .setSingleCategorygroup(categoryGroup.CategoryGroupid, {
          ...categoryGroup,
          Isactive: 1,

        })
        .then((response) => {
          APIgetAllCategoryGroup();
          notification["success"]({
            message: "Hoàn Tất",
            description: "Bạn đã sửa thành công",
          });
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (setDisable === true) {
      CategorygroupService()
      .setSingleCategorygroup(categoryGroup.CategoryGroupid, {
        ...categoryGroup,
        Isactive: 0,

      })
      .then((response) => {
        APIgetAllCategoryGroup();
        notification["success"]({
          message: "Hoàn Tất",
          description: "Bạn đã sửa thành công",
        });
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
    }
    if (upDatecategoryGroup === true) {

    }
  };
  return (
    <>
      <Row>
        <Col span={24} >
          <h2>Lĩnh vực</h2>
        </Col>
        <Col span={12}>
          <Input
            placeholder="Mã sản phẩm, tên sản phẩm"
            size="large"
            onChange={(e) => txt_Changed(e)}
            size="large"
            prefix={
              <SearchOutlined style={{ fontSize: "16px", color: "#a3a3a3" }} />
            }
            style={{ borderRadius: 8 }}
            allowClear
          />
        </Col>
        <Col span={12}>
          <Button
            className="float-right btn btn-info"
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            + Thêm lĩnh vực
          </Button>
        </Col>

        {dataRespontemp.map((item, index) => {
          return (
            <Col xs={24} sm={12} md={6} xl={5} className="mt-5 mx-3" key={index}>
              <div className="service-bx">
                <div className="action-box">
                  <Image
                    src={item.Image}
                  />
                </div>
                <div className="info-bx text-center">
                  <h4><a href="#">{item.CategoryGroupname}</a></h4>
                  <a href="#" className="btn radius-xl">View More</a>
                </div>
                <div className="handle-btn text-center">
                  <Button type="primary" shape="round" icon={<EditOutlined />} />
                  {item.Isactive.data[0]
                    ? <Button type="primary" className='mx-2' shape="round"
                      onClick={() => handleProduct(item, false, true, false)}
                      icon={<UnlockOutlined />} />
                    : <Button type="default" className='mx-2' shape="round"
                      onClick={() => handleProduct(item, true, false, false)}

                      icon={<LockOutlined />} />}
                  <Button type="primary" shape="round" danger icon={<DeleteOutlined />} onClick={() => showDeleteConfirm(item)} />
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
      <ModalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default ManagetUser;
