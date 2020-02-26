import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
} from 'antd';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const ResetPassword = (props) => {
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
      <h2>Reset password</h2>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Enter password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Confirm password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>

        <div className={styles.wrapperBtn}>
          <Button type="primary" htmlType="submit" className={styles.resetBtn}>
            Reset
          </Button>

          <div className={styles.wraperLink }>
            <Link to="/forgot-password" className={styles.activeLink}>
              Forgot password?
            </Link>
            <Link to="/sign-up" className={styles.activeLink}>
              Don&apos;t have an account? Sign Up
            </Link>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

const WrappedlResetPasswordForm = Form.create({ name: 'normal_login' })(ResetPassword);

export default WrappedlResetPasswordForm;