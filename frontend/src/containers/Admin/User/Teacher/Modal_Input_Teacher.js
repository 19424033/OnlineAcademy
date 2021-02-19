import React, { useState, useEffect } from "react";

import { Modal, Form, Input, InputNumber, DatePicker, Select,Alert } from "antd";

const { RangePicker } = DatePicker;
const { Option } = Select;

const ModalForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const rangeConfig = {
    rules: [{ type: "array", required: true, message: "Please select time!" }],
  };

  function onChange(value) {
    // console.log("changed", value);
  }

  function onBlur() {}

  function onFocus() {}

  function onSearch(val) {}

  return (
    <Modal
      visible={visible}
      title="Cấp tài khoảng giảng viên"
      okText="Cấp"
      cancelText="Đóng"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            // onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="Email"
          label="Email:"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Dislayname"
          label="Tên hiển thị:"
          rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}
        >
          <Input />
        </Form.Item>
        <Alert message="Mật khẩu mặc định là: 123456" type="warning" />
      </Form>
    </Modal>
  );
};
export default ModalForm;
