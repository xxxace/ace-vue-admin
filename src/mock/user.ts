import Mock from "mockjs";
import { isLogin } from '@/utils/auth';
import { MockParams } from '@/types/mock';
import setupMock, { successResponseWrap, failResponseWrap } from "./utils/setup-mock";

setupMock({
    setup() {
        Mock.mock(new RegExp('/api/user/info'), () => {
            if (isLogin()) {
                return successResponseWrap({
                    name: '阿测',
                    avatar: '//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
                    email: 'aceiscool@email.com',
                    job: 'frontend',
                    jobName: '前端摸鱼家',
                    organization: 'Frontend',
                    organizationName: '前端',
                    location: 'guangdong',
                    locationName: '广东',
                    introduction: 'ace is cool',
                    phone: '150****0000',
                });
            }

            return failResponseWrap(null, '未登录', 401);
        })

        Mock.mock(new RegExp('/api/user/login'), (param: MockParams) => {
            const { username, password } = JSON.parse(param.body);
            if (!username) return failResponseWrap(null, '账号不能为空');
            if (!password) return failResponseWrap(null, '密码不能为空');
            if (username === 'admin' && password === '123456') {
                return successResponseWrap({ token: 123456 })
            }
            if (username === 'user' && password === '123456') {
                return successResponseWrap({ token: 678910 })
            }
            return failResponseWrap(null, '账号或者密码错误');
        })
    }
})
