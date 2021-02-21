import React, { useState, useEffect } from "react";

import { Modal, Form, Input, Alert } from "antd";

const ModalForm = ({ visibleModalEdit, onEdit, onCancel, userEditModal }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      Usersid: userEditModal.Usersid,
      Email: userEditModal.Email,
      Dislayname: userEditModal.Dislayname,
      Telephone: userEditModal.Telephone,
    });
  }, [userEditModal])
  return (
    <Modal
      visible={visibleModalEdit}
      title="Sửa tài khoản giảng viên"
      okText="Sửa"
      cancelText="Đóng"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            // form.resetFields();
            onEdit(values);
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
        <Form.Item name="Usersid" style={{ display: "none" }}>
          <Input type={"hidden"} />
        </Form.Item>
      <Form.Item
        name="Email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
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
      <Form.Item
        name="Telephone"
        label="Điện thoại:"
        rules={[{ required: true, message: "Vui lòng nhập trường này!" }]}

      >
        <Input />
      </Form.Item>
      </Form>
    </Modal >
  );
};
export default ModalForm;
