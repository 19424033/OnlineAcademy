import React, { useState, useEffect,useContext } from "react";
import axios from "axios";

import { Table, Button } from "antd";
import ModalForm from "./Modal_Input_Teacher";
import {  localparseJson } from "../../../../utils/utils";
import {ManagerUserContext} from "../../../../utils/AppContext";

var dateFormat = require("dateformat");

const Teacher = () => {
  const {  datatableTemp,APIgetAllUser} = useContext(ManagerUserContext);

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
  ];
  const onCreate = (values) => {
    values.Created_at = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");

      console.log(values);
      axios
      .post("http://localhost:4000/api/users/teacher", values,{ headers: { "x-access-token": localparseJson(localStorage.getItem("AcademyOnline_Token")).accessToken } })
      .then((response) => {
        console.log(response.data)
      })
      .catch(function (error) {
        console.log("ERROR from server:", error);
      });
      setVisible(false);
      APIgetAllUser();
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Cấp tài khoản giảng viên
      </Button>
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
