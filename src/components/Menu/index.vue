<script lang="tsx">
import { defineComponent, h, compile } from 'vue';

export default defineComponent({
    emit: ['collapse'],
    setup() {
        const renderMenu = () => {
            const nodes = []
            nodes.push(<a-sub-menu
                key='0'
                v-slots={{
                    icon: () => h(compile('<icon-apps />')),
                    title: () => h(compile('Navigation 1'))
                }}
            >
                <a-menu-item key='0_0'>a-menu 1</a-menu-item>
                <a-menu-item key='0_1'>a-menu 2</a-menu-item>
                <a-menu-item key='0_2' disabled>
                    a-menu 3
                </a-menu-item>
            </a-sub-menu>)
            nodes.push(<a-sub-menu
                key='1'
                v-slots={{
                    icon: () => h(compile('<icon-bug />')),
                    title: () => h(compile('Navigation 2'))
                }}
            >
                <a-menu-item key='1_0'>a-menu 4</a-menu-item>
                <a-menu-item key='1_1'>a-menu 5</a-menu-item>
                <a-menu-item key='1_2'>a-menu 6</a-menu-item>
            </a-sub-menu>)
            nodes.push(<a-sub-menu
                key='2'
                v-slots={{
                    icon: () => h(compile('<icon-bulb />')),
                    title: () => h(compile('Navigation 3'))
                }}
            >
                <a-menu-item key='2_0'>a-menu 7</a-menu-item>
                <a-menu-item key='2_1'>a-menu 8</a-menu-item>
                <a-menu-item key='2_2'>a-menu 9</a-menu-item>
            </a-sub-menu>)
            return nodes
        }
        return () => (

            <a-menu
                showCollapseButton
                default-open-keys={['0']}
                default-selected-keys={['0_1']}
                style={{ width: `${200}px`, height: '100%' }}
            >
                {renderMenu()}
            </a-menu>
        )
    }
})
</script>