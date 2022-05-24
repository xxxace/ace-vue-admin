import axios from "axios";

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