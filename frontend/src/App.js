import "antd/dist/antd.css";
import "./assets/css/global.scss";
import React, { useState, useEffect } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";

import Register from "./components/Register/Register";
// import AuthService from "./services/auth.service";
import AppContext from "./utils/AppContext";
import { parseJwt,localparseJson,getAccessToken,parseAccessToken} from "./utils/utils";
import UserService from './services/user.service';
const App = () => {
  // const { token,setToken } = useToken();
  const [currentUser, setCurrentUser] = useState(undefined);
  const [nameUser, setnameUser] = useState(undefined);
  const [checkLocalStorage, setCheckLocalStorage] = useState(false);
console.log(checkLocalStorage)
  const saveToken = (userToken) => {
    // dùng để lưu token khi đăng nhập
    localStorage.setItem("AcademyOnline_Token", JSON.stringify(userToken));
  };
 
  useEffect(() => {
    // dùng để lấy token trên local
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    if (tokenString) {
      const userID = parseAccessToken(tokenString);  // lấy trường accessToken đi mã hoá và lấy ID
     console.log(userID)
     setnameUser(userID.Dislayname)
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
      value={{ nameUser, setnameUser, saveToken,setCurrentUser,checkLocalStorage,setCheckLocalStorage }}
    >
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact></Route>
          {checkLocalStorage?"":  <Route path="/login" component={Login} exact></Route>}
         
          {checkLocalStorage?"":  <Route path="/register" component={Register} exact></Route>}
          <Route path="*" component={HomePage}></Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
};

export default App;

// {token ?"": <Route path="/login" component={Login} ></Route>}
//         {token ?"":  <Route path="/register" component={Login}></Route>}
