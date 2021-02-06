import "antd/dist/antd.css";
import "./assets/css/global.scss";
import React, { useState, useEffect } from "react";
import Login from "./modules/page/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import HomePage from "./modules/page/HomePage/Homepage";

import Register from "./modules/page/Register/Register";
// import AuthService from "./services/auth.service";
import AppContext from "./utils/AppContext";
import { parseAccessToken } from "./utils/utils";
import UserService from "./services/user.service";
import Default from "./modules/components/Layout/Default";
import Auth from "./modules/components/Layout/Auth";
import Error from "./modules/components/Error/Error";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  console.log(Layout);
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
};

const App = () => {
  // const { token,setToken } = useToken();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [nameUser, setnameUser] = useState(undefined);
  const [checkOTPConfim, setCheckOTPConfim] = useState(undefined);

  const [checkLocalStorage, setCheckLocalStorage] = useState(false);
  // console.log(checkLocalStorage)
  const saveToken = (userToken) => {
    // dùng để lưu token khi đăng nhập
    localStorage.setItem("AcademyOnline_Token", JSON.stringify(userToken));
  };
  const history = useHistory();

  // console.log(checkOTPConfim);
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
          <AppRoute path="/" exact layout={Default} component={HomePage} />
           <AppRoute path="/profile"  layout={Default} component={""} />

       
         
          {checkLocalStorage ? (
            <></>
          ) : (
            <>
              <AppRoute path="/login" layout={Auth} component={Login} />
              <AppRoute path="/register" layout={Auth} component={Register} />
            </>
          )}
          <Route path="/not-found"><Error/></Route>
          <Redirect to="not-found" />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
