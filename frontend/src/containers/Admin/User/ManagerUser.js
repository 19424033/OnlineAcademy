import React, { useState, useEffect } from "react";
import UserService from "../../../services/user.service";
import { parseAccessToken, localparseJson } from "../../../utils/utils";
import { Tabs } from "antd";

import Teacher from './Teacher/Teacher'
const { TabPane } = Tabs;

const ManagerUser = () => {
  const [content, setContent] = useState();
  const tokenString = localStorage.getItem("AcademyOnline_Token");
  const accessToken = localparseJson(tokenString).accessToken;

  const [datatable, setDatatable] = useState([]);
  const [datatableTemp, setDatatableTemp] = useState([]);

  // const user = parseAccessToken(tokenString);

  useEffect(() => {
    UserService()
      .getAllUser(accessToken)
      .then(
        (response) => {
          console.log(response.data);
          const data = [];
          for (let i = response.data.length - 1; i >= 0; i--) {
            data.push({
              key: i,
              Usersid: response.data[i].Usersid,
              Email: response.data[i].Email,
              Dislayname: response.data[i].Dislayname,
              Jobid: response.data[i].Jobid,

            });
          }
          setDatatable(data);
          setDatatableTemp(data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setContent(_content);
        }
      );
  }, []);

  return (
    <Tabs type="card">
      <TabPane tab="Giảng Viên" key="1">
        <h3>{content}</h3>
        <Teacher  datatableTemp={datatableTemp}/>
      </TabPane>
      <TabPane tab="Sinh Viên" key="2"></TabPane>
    </Tabs>
  );
};

export default ManagerUser;
