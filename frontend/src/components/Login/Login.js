
import React, { useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link , useHistory, useLocation } from "react-router-dom";

import AuthService from "../../services/auth.service";
import AppContext from "../../utils/AppContext";
import { parseAccessToken_res } from "../../utils/utils";

import "antd/dist/antd.css";
import "./login.scss";


const Login = () => {
  const {
    setnameUser,
    saveToken,
    setCheckLocalStorage,
    setCheckOTPConfim,
  } = useContext(AppContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [labelText, setLabelText] = useState("");
  const onFinish = (values) => {
    AuthService()
      .login(values)
      .then((res) => {
        const { authenticated } = res.data;
        if (authenticated) {
          setnameUser(parseAccessToken_res(res.data).Dislayname);
          saveToken(res.data);
          if (parseAccessToken_res(res.data).OTP_Confim.data[0] === 1) {
            setCheckOTPConfim(true);
          } else {
            setCheckOTPConfim(false);
          }
          setCheckLocalStorage(true);
          setLabelText(<Alert message="ok !!" type="success" />);
          history.replace(from);
        } else {
          setLabelText(
            <Alert message="Email or Password is incorrect !!" type="error" />
          );
          setTimeout(() => setLabelText(), 3000);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="account-form-inner">
      <div className="account-container">
        <div className="heading-bx left">
          <h2 className="title-head">
            Login to your <span>Account</span>
          </h2>
          <p>
            Don't have an account?  {" "}
            <Link to="/register">Create one here </Link>
          </p>
        </div>
        <Form
          name="normal_login"
          className="contact-bx"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="Password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="errorText ">{labelText}</div>
        <div className="row placeani mt-4">
          <div className="col-lg-12">
            <h6>Login with Social media</h6>
            <div className="d-flex">
              <Link className="btn flex-fill m-r5 facebook" to="/">
                <i className="fa fa-facebook"></i>Facebook
              </Link>
              <Link className="btn flex-fill m-l5 google-plus" to="/">
                <i className="fa fa-google-plus"></i>Google Plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
