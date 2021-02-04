import React, { useState, useEffect } from "react";
import { Modal, Form, Input, InputNumber, Select, Button ,message} from "antd";
import AuthService from "../../../services/auth.service";
import { parseAccessToken } from "../../../utils/utils";

const OTP = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);

  const [form] = Form.useForm();

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onCreate = (values) => {
    // setIsModalVisible(false);
    console.log(values);
    const OTP = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}${values.otp5}${values.otp6}`;
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    const userID = parseAccessToken(tokenString);
    AuthService()
      .checkOTPDB(userID.Usersid,OTP)
      .then((result) => {
        console.log(result);
        if(result.data){
          message.success('Mã OTP khớp');

        }
        else{
          message.error('Mã OTP Không khớp');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (value1, event) => {
    console.log(value1);
    // this.setState({ [value1]: event.target.value });
  };
  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };
  const handleSubmit = (event) => {
    const data = new FormData(event.target);
    console.log(this.state);
    event.preventDefault();
  };

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      setTimeLeft(null);
    }

    if (!timeLeft) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const resetOTP = () => {
    setTimeLeft(60);
    console.log("object");
    const tokenString = localStorage.getItem("AcademyOnline_Token");
    const userID = parseAccessToken(tokenString);
    AuthService()
      .updateOTP(userID.Usersid)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Modal
        visible={isModalVisible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        width={590}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              // form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <div>
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              modifier: "public",
            }}
          >
            {/* <Form.Item name="Goods_ID" label="Mã hàng: ">
        <InputNumber
            style={{ width: "-webkit-fill-available" }}
            // defaultValue={1000}
            formatter={(value) =>
              value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')
            }
            parser={(value) =>  value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')}
          />
        </Form.Item> */}
            <Form.Item name="otp1" className="otpInput">
              <InputNumber
                type="text"
                autoComplete="off"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={(e) => handleChange("otp1", e)}
                tabIndex="1"
                maxLength="1"
                min={0}
                onKeyUp={(e) => inputfocus(e)}
              />
            </Form.Item>
            <Form.Item name="otp2" className="otpInput">
              <InputNumber
                type="text"
                autoComplete="off"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={(e) => handleChange("otp2", e)}
                tabIndex="2"
                maxLength="1"
                min={0}
                onKeyUp={(e) => inputfocus(e)}
              />
            </Form.Item>
            <Form.Item name="otp3" className="otpInput">
              <InputNumber
                type="text"
                autoComplete="off"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={(e) => handleChange("otp3", e)}
                tabIndex="3"
                maxLength="1"
                min={0}
                onKeyUp={(e) => inputfocus(e)}
              />
            </Form.Item>
            <Form.Item name="otp4" className="otpInput">
              <InputNumber
                type="text"
                autoComplete="off"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={(e) => handleChange("otp4", e)}
                tabIndex="4"
                maxLength="1"
                min={0}
                onKeyUp={(e) => inputfocus(e)}
              />
            </Form.Item>
            <Form.Item name="otp5" className="otpInput">
              <InputNumber
                type="text"
                autoComplete="off"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={(e) => handleChange("otp5", e)}
                tabIndex="5"
                maxLength="1"
                min={0}
                onKeyUp={(e) => inputfocus(e)}
              />
            </Form.Item>
            <Form.Item name="otp6" className="otpInput">
              <InputNumber
                type="text"
                autoComplete="off"
                // value={this.state.otp1}
                // onKeyPress={this.keyPressed}
                // onChange={(e) => handleChange("otp6", e)}
                tabIndex="6"
                maxLength="1"
                min={0}
                onKeyUp={(e) => inputfocus(e)}
              />
            </Form.Item>
          </Form>
          <Button type="primary" onClick={() => resetOTP()}>
            Primary Button
          </Button>
          <h1>{timeLeft ? `${timeLeft}s` : ""}</h1>
        </div>

        {/* <form onSubmit={handleSubmit}>
          <div className="otpContainer">
            <input
              name="otp1"
              type="text"
              autoComplete="off"
              className="otpInput"
              // value={this.state.otp1}
              // onKeyPress={this.keyPressed}
              onChange={(e) => handleChange("otp1", e)}
              tabIndex="1"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp2"
              type="text"
              autoComplete="off"
              className="otpInput"
              // value={this.state.otp1}
              // onKeyPress={this.keyPressed}
              onChange={(e) => handleChange("otp2", e)}
              tabIndex="2"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
            <input
              name="otp3"
              type="text"
              autoComplete="off"
              className="otpInput"
              // value={this.state.otp1}
              // onKeyPress={this.keyPressed}
              onChange={(e) => handleChange("otp3", e)}
              tabIndex="3"
              maxLength="1"
              onKeyUp={(e) => inputfocus(e)}
            />
          </div>
          <button className="primary" type="submit">
            Submit
          </button>
        </form> */}
      </Modal>
      day la cho nhap opt
    </div>
  );
};

export default OTP;
