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

const SignUp = (props) => {
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
        <h2>Sign Up</h2>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please confirm password' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Confirm password"
            />,
          )}
        </Form.Item>
        <Form.Item>

          <div className={styles.wrapperBtn}>
            <Button type="primary" htmlType="submit" className={styles.signUpBtn}>
              Sign Up
            </Button>
            <div className={styles.socialBtn}>
              <Button type="primary" htmlType="submit" className={styles.googleBtn}>
                Sign Up with Google
              </Button>
            </div>
           <div className={styles.wraperLink }>
             <Link to="/login" className={styles.activeLink}>
               Have an account? Sign In
             </Link>
           </div>
          </div>
        </Form.Item>
      </Form>
    );
};

const WrappedlSignUpForm = Form.create({ name: 'normal_login' })(SignUp);

export default WrappedlSignUpForm;