<script lang="tsx">
import { defineComponent, h, compile, computed, ref } from 'vue';
import { useAppStore, useRouterStore } from '@/store';
import { useRouter, RouteRecordRaw } from 'vue-router';
import { listenRouteChange } from '@/router/guard/route-listener';
export default defineComponent({
    setup() {
        const router = useRouter();
        const appStore = useAppStore();
        const routerStore = useRouterStore();
        const selectedKey = ref<string[]>([]);
        const openKey = ref<string[]>([]);
        const menuRoute = computed(() => {
            const AppMenu = routerStore.AppMenu
            if (AppMenu) return routerStore.AppMenu.children || []
            return []
        })
        const goto = (route: RouteRecordRaw) => {
            router.push({ name: route.name })
        }
        const subMenClick = (key: string) => {
            if (openKey.value.includes(key)) {
                openKey.value = []
            } else {
                openKey.value = [key]
            }
        }

        const collapsed = computed({
            get() {
                if (appStore.appDevice === 'desktop') return appStore.appMenuCollapse
                return false
            },
            set(newValue: boolean) {
                appStore.updateSetting({ menuCollapse: newValue })
            }
        })

        listenRouteChange((newRoute) => {
            const currentKey = newRoute.matched[newRoute.matched.length - 1]
                ?.name as string;
            const parentkey = newRoute.matched[newRoute.matched.length - 2]
                ?.name as string;
            selectedKey.value = [currentKey];
            openKey.value = [parentkey]
        })

        const renderSubMenu = () => {
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
                v-model:collapsed={collapsed.value}
                accordion={false}
                auto-open={false}
                auto-open-selected={true}
                auto-scroll-into-view={true}
                level-indent={34}
                open-keys={openKey.value}
                selected-keys={selectedKey.value}
                showCollapseButton={appStore.device === 'desktop'}
                style={{ width: `${220}px`, height: '100%' }}
                onSubMenuClick={subMenClick}
            >
                {renderSubMenu()}
            </a-menu>
        )
    }
})
</script>