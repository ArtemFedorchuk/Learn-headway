import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
} from 'antd';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const ForgotPassword = (props) => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Forgot password</h2>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Enter email!' }],
        })(
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="email"
            placeholder="Enter email"
          />,
        )}
      </Form.Item>
      <Form.Item>

        <div className={styles.wrapperBtn}>
          <Button type="primary" htmlType="submit" className={styles.resetBtn}>
            Forgot
          </Button>

          <div className={styles.wraperLink }>
            <Link to="/reset-password" className={styles.activeLink}>
              Reset password?
            </Link>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

const WrappedForgotPasswordForm = Form.create({ name: 'normal_login' })(ForgotPassword);

export default WrappedForgotPasswordForm;