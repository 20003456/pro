//这个文件放置所有的用户操作的内容
import { Effect, ImmerReducer, Reducer, Subscription, history } from 'umi';
import { registerReq, loginReq } from '../service/index';
import { message } from 'antd'
import { setCookie } from '../utils/index';
interface userModelStateType {

}
interface userModelType {
    namespace: string,
    state: userModelStateType,
    effects: {
        register: Effect,
        login: Effect,
        getUserInfo: Effect
    },
    reducers: {
        REGISTER: ImmerReducer<userModelStateType>
    },
    subscriptions: {
        setup: Subscription
    }
}
const userModel: userModelType = {
    namespace: 'user',//数据块名称
    state: {
        //定义state
    },
    effects: {
        //放置动作
        *register({ payload }, { call, put }) {
            // console.log('register', payload);
            const { data: { status, msg } } = yield call(registerReq, payload)
            if (status !== 1) {
                message.info(msg)
                return
            }
            message.success(msg)
            yield put({
                type: 'REGISTER'
            })
        },
        *login({ payload }, { call, put }) {
            const { data: { status, msg, root, avatar, username, token } } = yield call(loginReq, payload)
            if (status !== 1) message.info('用户名或者密码错误')
            //status === 1 
            setCookie('username', username, 7)
            setCookie('root', root, 7)
            setCookie('avatar', avatar, 7)
            setCookie('token', token, 7)
            message.success(msg, 1, () => {
                history.push('/home')
            });
        },
        getUserInfo() {
        },
    },
    reducers: {
        //修改数据的方法
        REGISTER(state, action) {
            console.log('REGISTER');
        }
    },
    subscriptions: {
        setup() {

        }
    }
}
export default userModel