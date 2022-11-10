import { useDark } from "@vueuse/core";

export default function useDarkByDefault() {
    return useDark({
        selector: 'body',
        attribute: 'arco-theme',
        valueDark: 'dark',
        valueLight: 'light',
        storageKey: 'arco-theme'
    });
}