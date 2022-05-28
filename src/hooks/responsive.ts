import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useDebounceFn } from "@vueuse/core";
import { useAppStore } from "@/store";
const minWidth = 992;

const queryDevice = function () {
    const rect = document.body.getBoundingClientRect();
    return rect.width - 1 < minWidth;
}

export default function useResponsive(immediate?: boolean) {
    const appStore = useAppStore();
    function resizeHandler() {
        if (!document.hidden) {
            const isMobile = queryDevice();
            appStore.updateSetting({ device: isMobile ? 'mobile' : 'desktop' });
        }
    }

    const debounceFn = useDebounceFn(resizeHandler, 200);

    onBeforeMount(() => window.addEventListener('resize', debounceFn));

    onMounted(() => immediate && debounceFn());

    onBeforeUnmount(() => window.removeEventListener('resize', debounceFn));
}