<script lang="tsx">
import { defineComponent, compile, h, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'QuickLinks',
    setup() {
        const router = useRouter();
        const links = ref<{ label: string, name: string, icon: string }[]>([{
            label: '监控页',
            name: 'monitor',
            icon: 'icon-bug'
        }, {
            label: '404',
            name: '404',
            icon: 'icon-close'
        }, {
            label: '403',
            name: '403',
            icon: 'icon-exclamation'
        }, {
            label: '未知页面',
            name: 'NotFound',
            icon: 'icon-question'
        }])

        return () => (
            links.value.map(link => {
                return (
                    <div class="route-item" key={link.name} onClick={() => router.push({ name: link.name })}>
                        <span class="icon">
                            {link.icon ? h(compile(`<${link.icon}/>`)) : ''}
                        </span>
                        <div>{link.label}</div>
                        <icon-right stroke-width={8} stroke-linejoin="bevel" stroke-linecap="round" />
                    </div>
                )
            })
        )
    }
})
</script>

<style lang="less" scoped>
.route-item {
    display: flex;
    height: 60px;
    box-sizing: border-box;
    align-items: center;
    color: var(--color-text-2);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;

    .icon {
        display: inline-block;
        padding: 10px 12px;
        margin-right: 10px;
        border-radius: 12px;
        color: var(--color-bg-1);
        background-color: var(--icon-bg-1);
    }

    div {
        flex: 1;
    }
}

a {
    text-decoration: none;
    font-style: normal;
}
</style>