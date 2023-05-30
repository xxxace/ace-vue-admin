import { useDark } from "@vueuse/core";

export default function useDarkByDefault() {
    return useDark({
        selector: 'body',
        attribute: 'arco-theme',
        valueDark: 'dark',
        valueLight: 'light',
        storageKey: 'arco-theme',
        onChanged: (isDark) => {
            if (isDark) {
                document.documentElement.classList.add('dark')
                document.body.setAttribute('arco-theme', 'dark')
            } else {
                document.documentElement.classList.remove('dark')
                document.body.setAttribute('arco-theme', 'light')
            }
        }
    });
}