// export const routes = [
//     {
//         path: '/welcome',
//         component: 'IndexPage',
//         menu: {
//             name: '欢迎', // 兼容此写法
//             icon: 'testicon',
//         },
//         // 更多功能查看
//         // https://beta-pro.ant.design/docs/advanced-menu
//         // 不展示顶栏
//         headerRender: false,
//         // 不展示页脚
//         footerRender: false,
//         // 不展示菜单
//         menuRender: false,
//         // 不展示菜单顶栏
//         menuHeaderRender: false,
//         // 权限配置，需要与 plugin-access 插件配合使用
//         access: 'canRead',
//         // 隐藏子节点
//         hideChildrenInMenu: true,
//         // 隐藏自己和子节点
//         hideInMenu: true,
//         // 子项往上提，仍旧展示,
//         flatMenu: true,
//     },
// ];



import {
    HomeOutlined,
    BarChartOutlined,
    LineChartOutlined,
    AlignRightOutlined,
    RiseOutlined,
    HeatMapOutlined,
    AlertOutlined,
    SkinOutlined,
    PictureOutlined,
    SettingOutlined

} from '@ant-design/icons'
export default [
    {
        path: '/home',
        name: '首页',
        component: '../pages/index',
        icon: 'HomeOutlined'
    },
    {
        name: '数据可视化',
        icon: 'BarChartOutlined',
        path: '/dashboard',
        routes: [
            {
                name: '数据监控',
                path: '/dashboard/analyse',
                component: '../pages/dashboard/Analyse'
            },
            {
                name: '数据分析',
                path: '/dashboard/monitoring',
                component: '../pages/dashboard/Monitoring'
            },
            {
                name: '工作台数据',
                path: '/dashboard/workbench',
                component: '../pages/dashboard/Workbench'
            },
        ],
    },
    {
        name: '数据管理',
        icon: 'LineChartOutlined',
        path: '/data-manager',
        routes: [
            {
                name: '用户列表',
                path: '/data-manager/userlist',
                component: '../pages/data-manager/UserList',
                wrappers: ['../wrappers/auth']
            },
            {
                name: '工单列表',
                path: '/data-manager/workorder',
                component: '../pages/data-manager/Workorder'
            },
            {
                name: '申请列表',
                path: '/data-manager/applyfor',
                component: '../pages/data-manager/Applyfor'
            },
        ],
    },
    {
        path: '/detail',
        name: '详情页',
        icon: 'RiseOutlined',
        routes: [
            {
                path: '/other/upLoad',
                name: 'odps同步导入',
            },
            {
                path: '/other/upLoadMenu',
                name: '菜单导入',
            },
            {
                path: '/other/homeEdit',
                name: '概述编辑',
            },
        ],
    },
    {
        path: '/detail1',
        name: '异常页',
        icon: 'HeatMapOutlined',
        routes: [
            {
                path: '/other/upLoad1',
                name: 'odps同步导入',
            },
            {
                path: '/other/upLoadMenu1',
                name: '菜单导入',
            },
            {
                path: '/other/homeEdit1',
                name: '概述编辑',
            },
        ],
    },
    {
        path: '/detail2',
        name: '结果页',
        icon: 'AlertOutlined',
        routes: [
            {
                path: '/other/upLoad2',
                name: 'odps同步导入',
            },
            {
                path: '/other/upLoadMenu2',
                name: '菜单导入',
            },
            {
                path: '/other/homeEdit2',
                name: '概述编辑',
            },
        ],
    },
    {
        path: '/detail3',
        name: '个人页',
        icon: 'SkinOutlined',
        routes: [
            {
                path: '/other/upLoad3',
                name: 'odps同步导入',
            },
            {
                path: '/other/upLoadMenu3',
                name: '菜单导入',
            },
            {
                path: '/other/homeEdit3',
                name: '概述编辑',
            },
        ],
    },
    {
        path: '/edit',
        name: '图形编辑器',
        icon: 'PictureOutlined',
        routes: [
            {
                path: '/edit/graphics',
                name: '图形编辑',
                component: '../pages/edit/index.tsx'
            },
        ],
    },
    {
        path: '/setting',
        name: '设置',
        icon: 'SettingOutlined',
        routes: [
            {
                path: '/setting/set',
                name: '设置中心',
                component: '../pages/setting/index.tsx',
                wrappers: ['../wrappers/auth']
            },
        ],
    },
    {
        path: '/user',
        component: '../pages/user'
    },
    {
        path: '/register',
        component: '../pages/user/register'

    },
    {
        path: '/login',
        component: '../pages/user/login'

    },
    {
        path: '*',
        component: '../pages/404/index'
    }
];
