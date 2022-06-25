import Mock from "mockjs";
import {isLogin} from '@/utils/auth';
import {MockParams} from '@/types/mock';
import {RouterRaw} from '@/store/modules/router/type';
import setupMock, {successResponseWrap, failResponseWrap} from "./utils/setup-mock";

export const menuList: RouterRaw[] = [{
    name: 'dashboard',
    title: '仪表盘',
    icon: 'icon-dashboard',
    path: '/dashboard',
    component: '@layout/page-view',
    children: [{
        title: '工作站',
        name: 'workplace',
        path: '/workplace',
        component: 'dashboard/workplace/index'
    }, {
        title: '监控',
        name: 'monitor',
        path: '/monitor',
        component: 'dashboard/monitor/index'
    }]
}, {
    name: 'exception',
    title: '异常页',
    icon: 'icon-bug',
    path: '/exception',
    component: '@layout/page-view',
    children: [{
        title: '403',
        name: '403',
        path: '/403',
        component: 'exception/403/index'
    }, {
        title: '404',
        name: '404',
        path: '/404',
        component: 'exception/404/index'
    }]
}, {
    name: 'table',
    title: '表格页',
    icon: 'icon-nav',
    path: '/table',
    component: '@layout/page-view',
    children: [{
        title: 'table1',
        name: 'table1',
        path: '/table1',
        component: 'table/table1/index'
    }]
}];

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
            const {username, password} = JSON.parse(param.body);
            if (!username) return failResponseWrap(null, '账号不能为空');
            if (!password) return failResponseWrap(null, '密码不能为空');
            if (username === 'admin' && password === '123456') {
                return successResponseWrap({token: 123456})
            }
            if (username === 'user' && password === '123456') {
                return successResponseWrap({token: 678910})
            }
            return failResponseWrap(null, '账号或者密码错误');
        })

        Mock.mock(new RegExp('/api/user/menuList'), () => {
            return successResponseWrap(menuList);
        })
    }
})
