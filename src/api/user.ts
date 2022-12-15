import { successResponseWrap } from './../mock/utils/setup-mock';
import axios from "axios";
import { menuList } from "@/mock/user";
export interface LoginRes {
    token: string;
}
export interface LoginData {
    username: string;
    password: string;
}

export const login = (data: LoginData) => {
    return axios.post<LoginRes>('/api/user/login', data);
}

export const getMenuList = () => {
    return new Promise(resolve => {
        resolve(successResponseWrap(menuList))
    })
}