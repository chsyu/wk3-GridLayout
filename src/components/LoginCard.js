import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginCard = () => {
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo.errorFields[0].errors[0])
  };
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFihishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
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

        <a className="login-form__forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"
          className="login-form__button"
        >
          Log in
        </Button>
        Or <Link to={"/register?redirect=shipping"}>register now!</Link>
      </Form.Item>
    </Form>
  );
};
export default LoginCard;
