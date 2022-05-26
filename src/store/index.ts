import { createPinia } from 'pinia'
import useAppStore from './modules/app'
import useUserStore from './modules/user'
import useRouterStore from './modules/router'

const pinia = createPinia();

export { useAppStore, useUserStore, useRouterStore }
export default pinia