import React from "react";
import "antd/dist/antd.css";
import "./login.scss";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/Homepage";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <div class="page-wraper">
            <div class="account-form">
              <div class="account-head">
                <Link to="/">
                  <img src="assets/images/logo-white-2.png" alt="" />
                </Link>
              </div>
              <div class="account-form-inner">
                <div class="account-container">
                  <div class="heading-bx left">
                    <h2 class="title-head">
                      Login to your <span>Account</span>
                    </h2>
                    <p>
                    Lorem Ipsum là gì?
Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng trong các ứng dụng dàn trang, như Aldus PageMaker.
                      <Link to="/register"> Create one here </Link>
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
                          <UserOutlined className="site-form-item-icon" />
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
                          <LockOutlined className="site-form-item-icon" />
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

                      <a className="login-form-forgot" href="/">
                        Forgot password
                      </a>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="button-md login-form-button "
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                  <div class="row placeani">
                    <div class="col-lg-12">
                      <h6>Login with Social media</h6>
                      <div class="d-flex">
                        <a class="btn flex-fill m-r5 facebook" href="/">
                          <i class="fa fa-facebook"></i>Facebook
                        </a>
                        <a class="btn flex-fill m-l5 google-plus" href="/">
                          <i class="fa fa-google-plus"></i>Google Plus
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/register" component>
          register
        </Route>
      </Switch>
    </Router>
  );
};

export default Login;
