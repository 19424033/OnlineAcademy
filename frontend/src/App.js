import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";

import "antd/dist/antd.css";
import "./assets/css/global.scss";

import AppRoute from "./AppRoute";

//page
import HomePage from "./modules/page/HomePage/Homepage";
import Login from "./modules/page/Login/Login";
import Register from "./modules/page/Register/Register";
import Error from "./modules/components/Error/Error";
import OTP from "./modules/page/OTPComfirm/OTP";

//layout
import Default from "./modules/components/Layout/Default";
import Auth from "./modules/components/Layout/Auth";

//utils
import AppContext from "./utils/AppContext";
import { parseAccessToken } from "./utils/utils";
import Profile from "./modules/page/Profile/Profile";
import Category from "./modules/page/Category/Category";

const App = () => {
  const history = useHistory();

  const [currentUser, setCurrentUser] = useState(undefined);
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
      const userID = parseAccessToken(tokenString); // lấy trường accessToken đi mã hoá và lấy ID
      console.log(userID);
      setnameUser(userID.Dislayname);
      if (userID.OTP_Confim.data[0] === 1) {
        setCheckOTPConfim(true);
      } else {
        setCheckOTPConfim(false);
      }
      setCheckLocalStorage(true);

      // UserService(userID,useraccessToken).getUserBoard().then((result) => {
      //   console.log(result.data.Dislayname)
      //   setnameUser(result.data.Dislayname)
      // }).catch((err) => {
      //   console.log(err)

      // });
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
        setCurrentUser,
        setCheckLocalStorage,
        setCheckOTPConfim,
      }}
    >
      <Router>
        <Switch>
        {checkOTPConfim === false ? <OTP /> : ""}

          <AppRoute path="/" exact layout={Default} component={HomePage} />
          <AppRoute path="/profile" layout={Default} component={Profile} />
          <AppRoute path="/category" layout={Default} component={Category} />

          {checkLocalStorage ? (
            <></>
          ) : (
            <>
              <AppRoute path="/login" layout={Auth} component={Login} />
              <AppRoute path="/register" layout={Auth} component={Register} />
            </>
          )}
          <Route path="/not-found">
            <Error />
          </Route>
          <Redirect to="not-found" />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
