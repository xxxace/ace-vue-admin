import mitt, { Handler } from 'mitt';
import type { RouteLocationNormalized } from 'vue-router';

const emitter = mitt();
const key = Symbol('ROUTER_CHANGE');
let lastRoute: RouteLocationNormalized;

export const setRouteEmitter = (to: RouteLocationNormalized) => {
    emitter.emit(key, to);
    lastRoute = to;
}

export const listenRouteChange = (
    handler: (route: RouteLocationNormalized) => void,
    immediate = true
) => {
    emitter.on(key, handler as Handler);
    if (immediate && lastRoute) {
        handler(lastRoute);
    }
}

export const removeRouteListener = () => {
    emitter.off(key);
}