import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  SearchOutlined,
  LockOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import { Table, Button, notification, Input, Row, Col } from "antd";
import ModalForm from "./Modal_Input_Teacher";
import { localparseJson } from "../../../../utils/utils";
import { ManagerUserContext } from "../../../../utils/AppContext";

var dateFormat = require("dateformat");

const Teacher = () => {
  const { datatableTemp, APIgetAllUser, txt_Changed, UserService } = useContext(
    ManagerUserContext
  );

  const [data, setdata] = useState();
  useEffect(() => {
    const temp = datatableTemp.filter((item) => item.Jobid === 3);
    setdata(temp);
  }, [datatableTemp]);
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "ID",
      dataIndex: "Usersid",
      width: 50,
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "Email",
      width: 50,
      align: "center",
    },
    {
      title: "Display Name",
      dataIndex: "Dislayname",
      width: 50,
      align: "center",
      sorter: {
        compare: (a, b) => a.Dislayname - b.Dislayname,
        multiple: 3,
      },
    },
    {
      title: "Khóa",
      dataIndex: "Isactive",
      width: 100,
      align: "center",
      key: "Isactive",

      render: (Isactive, user) => (
        <>
          {Isactive.data[0] ? (
            <Button
              type="primary"
              shape="round"
              onClick={() => handleProduct(user, false, true, false)}
              icon={<UnlockOutlined />}
            />
          ) : (
            <Button
              type="default"
              shape="round"
              onClick={() => handleProduct(user, true, false, false)}
              icon={<LockOutlined />}
            />
          )}
        </>
      ),
    },
  ];
  const handleProduct = (user, setEnable, setDisable, upDateProduct) => {
    if (setEnable === true) {
      UserService()
        .setSingleUser(user.Usersid, {
          ...user,
          Isactive: 1,
        })
        .then((response) => {
          APIgetAllUser();
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (setDisable === true) {
      UserService()
        .setSingleUser(user.Usersid, {
          ...user,
          Isactive:0,
        })
        .then((response) => {
          APIgetAllUser();
        })
        .catch(function (error) {
          console.log("ERROR from server:", error);
        });
    }
    if (upDateProduct === true) {
    }
  };
  const onCreate = (values) => {
    values.Created_at = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

    console.log(values);
    axios
      .post("http://localhost:4000/api/users/teacher", values, {
        headers: {
          "x-access-token": localparseJson(
            localStorage.getItem("AcademyOnline_Token")
          ).accessToken,
        },
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 204) {
          notification["error"]({
            message: "Không thành công",
            description: `Tài khoản đã tồn tại`,
          });
        } else {
          notification["success"]({
            message: "Hoàn Tất",
            description: `Bạn vừa thêm thành công`,
          });
          setVisible(false);
          APIgetAllUser();
        }
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <Input
            placeholder="Mã sản phẩm, tên sản phẩm"
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
            className="float-right"
            type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            + Cấp tài khoản giảng viên
          </Button>
        </Col>
      </Row>

      <ModalForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Table
        style={{ paddingTop: "30px" }}
        size="small"
        columns={columns}
        dataSource={data}
        scroll={{ x: 768 }}
      />
    </>
  );
};

export default Teacher;
