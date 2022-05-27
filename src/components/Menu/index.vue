<script lang="tsx">
import { defineComponent, h, compile, computed, ref } from 'vue';
import { useRouterStore } from '@/store';
import { useRouter, RouteRecordRaw } from 'vue-router';
import { listenRouteChange } from '@/router/guard/route-listener';
export default defineComponent({
    emit: ['collapse'],
    setup() {
        const router = useRouter()
        const routerStore = useRouterStore();
        const selectedKey = ref<string[]>([]);
        const menuRoute = computed(() => {
            const AppMenu = routerStore.AppMenu
            if (AppMenu) return routerStore.AppMenu.children || []
            return []
        })
        const goto = (route: RouteRecordRaw) => {
            router.push({ name: route.name })
        }

        listenRouteChange((newRoute) => {
            const key = newRoute.matched[newRoute.matched.length - 1]
                ?.name as string;
            selectedKey.value = [key];
        })

        const renderMenu = () => {
            function traval(_route: RouteRecordRaw[]) {
                const nodes: any = []
                if (_route) {
                    _route.forEach(item => {
                        let node
                        const icon = item?.meta?.icon ? () => h(compile(`<${item.meta?.icon}/>`)) : null
                        if (item.children?.length) {
                            node = (<a-sub-menu
                                key={item.name}
                                v-slots={{
                                    icon,
                                    title: () => h(compile(item.meta?.title as string))
                                }}
                            >
                                {traval(item.children)}
                            </a-sub-menu>)
                        } else {
                            node = (
                                <a-menu-item
                                    key={item.name}
                                    v-slots={{ icon }}
                                    onClick={() => goto(item)}
                                >
                                    {h(compile(item.meta?.title as string))}
                                </a-menu-item>
                            )
                        }
                        nodes.push(node)
                    })
                }
                return nodes
            }

            return traval(menuRoute.value)
        }
        return () => (
            <a-menu
                showCollapseButton
                auto-open={false}
                auto-open-selected={true}
                selected-keys={selectedKey.value}
                level-indent={34}
                style={{ width: `${200}px`, height: '100%' }}
            >
                {renderMenu()}
            </a-menu>
        )
    }
})
</script>