import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import "antd/dist/antd.css";
import "./assets/css/global.scss";

import AppRoute from "./AppRoute";

//page
import HomePage from "./components/HomePage/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error from "./components/Error/Error";
import OTP from "./components/OTPComfirm/OTP";
import Profile from "./components/Profile/Profile";
import Category from "./containers/Category/Category";
import BoardAdmin from "./containers/Admin/BoardAdmin";

//layout
import Default from "./components/Layout/Default";
import Auth from "./components/Layout/Auth";

//utils
import AppContext from "./utils/AppContext";
import { parseAccessToken } from "./utils/utils";


const App = () => {

  const [nameUser, setnameUser] = useState(undefined);
  const [checkOTPConfim, setCheckOTPConfim] = useState(undefined);

  const [checkLocalStorage, setCheckLocalStorage] = useState(false);
  const saveToken = (userToken) => {
    // dùng để lưu token khi đăng nhập
    localStorage.setItem("AcademyOnline_Token", JSON.stringify(userToken));
  };

  useEffect(() => {
    // dùng để lấy token trên local
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    if (tokenString) {
      const {OTP_Confim,Dislayname } = parseAccessToken(tokenString); // lấy trường accessToken đi mã hoá
      setnameUser(Dislayname);
      if (OTP_Confim.data[0] === 1) {
        setCheckOTPConfim(true);
      } else {
        setCheckOTPConfim(false);
      }
      setCheckLocalStorage(true);
// 
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        nameUser,
        checkLocalStorage,
        checkOTPConfim,
        setnameUser,
        saveToken,
        setCheckLocalStorage,
        setCheckOTPConfim,
      }}
    >
      <Router>
        <Switch>
          {checkOTPConfim === false ? <OTP /> : ""}

          <AppRoute path={["/", "/home"]} exact layout={Default} component={HomePage} />
          <AppRoute path="/profile" layout={Default} component={Profile} />
          <AppRoute path="/category" layout={Default} component={Category} />
          <AppRoute path="/mod"  layout={Default} component={BoardAdmin} />
          {checkLocalStorage ? (
            <AppRoute path="*" layout={Default} component={Error} />
          ) : (
            <>
              <AppRoute path="/login" layout={Auth} component={Login} />
              <AppRoute path="/register" layout={Auth} component={Register} />
              <AppRoute path="*" layout={Default} component={Error} />
            </>
          )}

        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
