import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from 'antd';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const LogIn = (props) => {
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
        <h2>LogIn</h2>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
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
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            or
            <div className={styles.socialBtn}>
              <Button type="primary" htmlType="submit" className={styles.facebookBtn}>
                Facebook
              </Button>

              <Button type="primary" htmlType="submit" className={styles.googleBtn}>
                Google
              </Button>
            </div>
           <div className={styles.wraperLink }>
             <Link to="/forgot-password" className={styles.activeLink}>
               Forgot password?
             </Link>
             <Link to="/sign-up" className={styles.activeLink}>
               Don&apos;t have an account? Sign Up
             </Link>           </div>
          </div>
        </Form.Item>
      </Form>
    );
};

const WrappedlLoginForm = Form.create({ name: 'normal_login' })(LogIn);

export default WrappedlLoginForm;