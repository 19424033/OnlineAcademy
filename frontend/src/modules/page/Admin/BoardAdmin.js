import React, { useState, useEffect } from "react";

import UserService from "../../../services/user.service";
import { parseAccessToken,localparseJson } from "../../../utils/utils";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const tokenString = localStorage.getItem("AcademyOnline_Token");
  const refreshToken = localparseJson(tokenString).refreshToken;
  const user = parseAccessToken(tokenString);

  // lấy trường accessToken đi mã hoá và lấy ID
  console.log(user);
  useEffect(() => {
    UserService(user.Usersid,refreshToken)
      .getUserBoard()
      .then(
        (response) => {
          setContent(response.data);
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
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardAdmin;
