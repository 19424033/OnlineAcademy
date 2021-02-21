import React, { useState, useEffect } from "react";

import UserService from "../../../services/user.service";
import { parseAccessToken,localparseJson } from "../../../utils/utils";

const ManagetUser = () => {
  const [content, setContent] = useState();
  const tokenString = localStorage.getItem("AcademyOnline_Token");
  const accessToken = localparseJson(tokenString).accessToken;
  const user = parseAccessToken(tokenString);

  // lấy trường accessToken đi mã hoá và lấy ID
  useEffect(() => {
   
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default ManagetUser;
