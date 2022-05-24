import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { getToken } from '@/utils/auth';
import { useUserStore } from '@/store';

export interface HttpResponse<T = unknown> {
    status: number
    msg: string;
    code: number;
    data: T;
}

const baseUrl = import.meta.env.VITE_BASE_URL;
if (baseUrl) {
    axios.defaults.baseURL = baseUrl;
}

axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = getToken();
        if (token) {
            if (!config.headers) config.headers = {};
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    (response: AxiosResponse) => {
        const res = response.data;

        if (res.code !== 200) {
            const errorMsg = res.msg || '响应失败！';

            Message.error({
                content: errorMsg,
                duration: 5 * 1000
            })

            if ([401, 500].includes(res.code) && response.config.url !== '/api/user/login' && response.config.url !== '/api/user/info') {
                Modal.error({
                    title: '登出确认',
                    content: `登录超时,你可以点击取消继续在此页面,或者重新登录`,
                    okText: '确定',
                    async onOk() {
                        const userStore = useUserStore();
                        await userStore.logout();
                        window.location.reload();
                    }
                })
            }

            return Promise.reject(new Error(errorMsg));
        }

        return res;
    },
    (error) => {
        Message.error({
            content: error.msg || '响应错误！',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)