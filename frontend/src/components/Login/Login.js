import React, { useState } from 'react';
import "antd/dist/antd.css";
import "./login.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/Homepage";
import Register from '../Register/Register'
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div className="page-wraper">
            <div className="account-form">
              <div className="account-head">
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "/logo.png"}
                    alt=""
                    width={320}
                  />
                </Link>
              </div>
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
                    classNameName="contact-bx"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined classNameName="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined classNameName="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
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
                  <div className="row placeani">
                    <div className="col-lg-12">
                      <h6>Login with Social media</h6>
                      <div className="d-flex">
                        <a className="btn flex-fill m-r5 facebook" href="/">
                          <i className="fa fa-facebook"></i>Facebook
                        </a>
                        <a className="btn flex-fill m-l5 google-plus" href="/">
                          <i className="fa fa-google-plus"></i>Google Plus
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/register" >
         <Register/>
        </Route>
        <Route path="/" component={HomePage} exact></Route>
      </Switch>
    </Router>
  );
};

export default Login;
