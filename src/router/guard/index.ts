import { Router } from "vue-router";
import setupPermissionGuard from './permissionGuard';
export default function setupRouterGuard(router: Router) {
    setupPermissionGuard(router);
}