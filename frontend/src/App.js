import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { notification } from "antd";

import "antd/dist/antd.css";
import "./assets/global.scss";

import AppRoute from "./AppRoute";

//page
import HomePage from "./components/HomePage/Homepage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error from "./components/Error/Error";
import OTP from "./components/OTPComfirm/OTP";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Profile from "./components/Profile/Profile";
import Category from "./containers/Category/Category";
import ManagerUser from "./containers/Admin/User/ManagerUser";
import ManagerSource from "./containers/Admin/Source/ManagerSource";
import ManagerCategories from "./containers/Admin/Categories/ManagerCategories";

//layout
import Default from "./containers/Layout/Default";
import Auth from "./containers/Layout/Auth";
import AdminBasic from "./containers/Layout/AdminBasic/AdminBasic";

//utils
import {AppContext} from "./utils/AppContext";
import { parseAccessToken } from "./utils/utils";
import AuthService from "./services/auth.service";

const App = () => {
  const [nameUser, setnameUser] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [userid, setUserid] = useState(undefined);

  const [checkOTPConfim, setCheckOTPConfim] = useState(undefined);
  const [checkLocalStorage, setCheckLocalStorage] = useState(false);
  const saveToken = (userToken) => {
    // dùng để lưu token khi đăng nhập
    localStorage.setItem("AcademyOnline_Token", JSON.stringify(userToken));
  };
  const logOut = () => {
    setnameUser();
    saveToken();
    setCheckLocalStorage(false);
    setCheckOTPConfim();
    AuthService().logout();
  };

  useEffect(() => {
    // dùng để lấy token trên local
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    if (tokenString) {
      const { OTP_Confim, Dislayname, Usersid, Users } = parseAccessToken(
        tokenString
      ); // lấy trường accessToken đi mã hoá
      setnameUser(Dislayname);
      setUserid(Usersid);
      setProfile(Users);
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
        profile,
        userid,
        setnameUser,
        setUserid,
        setProfile,
        saveToken,
        setCheckLocalStorage,
        setCheckOTPConfim,
        logOut,
      }}
    >
      <Router>
        <Switch>
          {checkOTPConfim === false ? <OTP /> : ""}

          <AppRoute
            path={["/", "/home"]}
            exact
            layout={Default}
            component={HomePage}
          />
          <AppRoute path="/profile" layout={Default} component={Profile} />
          <AppRoute path="/category" layout={Default} component={Category} />
         
          {checkLocalStorage ? (
            <>
             <AppRoute
            path="/admin/user"
            layout={AdminBasic}
            component={ManagerUser}
          />
          <AppRoute
            path="/admin/categories"
            layout={AdminBasic}
            component={ManagerCategories}
          />
          <AppRoute
            path="/admin/source"
            layout={AdminBasic}
            component={ManagerSource}
          />
            {/* <AppRoute path="*" layout={Default} component={Error} /> */}
            
            </>
          ) : (
            <>
              <AppRoute path="/login" layout={Auth} component={Login} />
              <AppRoute path="/register" layout={Auth} component={Register} />
              <AppRoute
                path="/resetPassword"
                layout={Auth}
                component={ResetPassword}
              />
              {/* <AppRoute path="*" layout={Default} component={Error} /> */}
            </>
          )}
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
