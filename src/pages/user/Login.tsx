import React from 'react'
import styles from './index.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'umi'
import md5 from 'md5'
export default connect(
    ({ user }) => user
)(function Login({ dispatch }) {
    const onFinish = values => {
        const { username, password, remember } = values;
        dispatch({
            type: 'user/login',
            payload: {
                username,
                password: md5(password),
                remember
            }
        })
    };
    return (
        <div className={styles.login}>
            <img src="https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg" alt="" />
            <div className={styles.container}>
                <Form
                    name="normal_login"
                    className="login-form"
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
                            <Checkbox>记住用户名</Checkbox>
                        </Form.Item>
                        <a className="login-form-forgot" href="">
                            忘记密码?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <span>&nbsp;或者</span> <a href="">现在注册!</a>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
) 