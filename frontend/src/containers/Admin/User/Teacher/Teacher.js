import React, { useState, useEffect } from "react";

import { Table, Button } from "antd";
import ModalForm from "./Modal_Input_Teacher";

const Teacher = ({ datatableTemp }) => {
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
  const onCreate = (values) => {};
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
