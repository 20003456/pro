import React from 'react'
import styles from './app.less'
import { Link } from 'umi'
import {
    SearchOutlined,
    QuestionCircleOutlined,
    PhoneOutlined,
    UserOutlined,
    GlobalOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';
import { Avatar, Menu, Dropdown, Button } from 'antd';
import { getCookie } from './utils/index';
const avatar = getCookie('avatar');
const username = getCookie('username');
const menu = (
    <Menu>
        <Menu.Item>
            <Link rel="noopener noreferrer" to="/user">
                个人中心
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link rel="noopener noreferrer" to="/setting/set">
                个人设置
            </Link>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="http://www.tmall.com/">
                <Button type="primary">退出登录</Button>
            </a>
        </Menu.Item>
    </Menu>
);
export const layout = {
    logout: () => { },
    rightRender: (initInfo) => {
        return <div className={styles.right_container}>
            <SearchOutlined />
            <QuestionCircleOutlined />
            <PhoneOutlined />
            <Dropdown overlay={menu} placement="bottomCenter">
                <div>
                    <Avatar src={avatar} size={32} icon={<UserOutlined />} />
                    <span>{username}</span>
                </div>
            </Dropdown>
            <GlobalOutlined />
        </div>;
    },
};