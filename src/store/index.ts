import { createPinia } from 'pinia'
import useAppStore from './modules/app'
import useUserStore from './modules/user'
import useRouterStore from './modules/router'
import useNavBarStore from './modules/nav-bar'

const pinia = createPinia();

export { useAppStore, useUserStore, useRouterStore, useNavBarStore }
export default pinia