//验证权限
import { getCookie } from '../utils/index';
import { request } from 'umi'
import { checkAuthURL, registerURL, loginrURL } from './url';
const username = getCookie('username')
export function checkAuthReq() {
    return request(checkAuthURL, {
        method: 'POST',
        data: {
            username
        }
    })
}
export function registerReq(data) {
    return request(registerURL, {
        method: 'POST',
        data
    })
}
interface DataType {
    username: string,
    password: string,
}
export function loginReq(data: DataType): Promise<any> {
    return request(loginrURL, {
        method: 'POST',
        data
    })
}