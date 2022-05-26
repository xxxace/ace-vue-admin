import { login, LoginData } from '@/api/user';
import { defineStore } from "pinia";
import { UserState } from "./types";
import { removeToken, setToken } from '@/utils/auth';

const useUserStore = defineStore('user', {
    state: (): UserState => ({
        name: 'ace',
        avatar: undefined
    }),
    actions: {
        changeUserName(name: string) {
            this.name = name
        },

        info() {

        },

        async login(data: LoginData) {
            const res = await login(data);
            setToken(res.data.token);
        },

        logout() {
            removeToken();
        }
    }
})
export default useUserStore