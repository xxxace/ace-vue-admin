<template>
    <slot :toggle="handleTransition" :isDark="isDark"></slot>
</template>

<script lang="ts" setup>
import { useToggle } from '@vueuse/core';
import useDarkByDefault from '@/hooks/useDarkByDefault'

const isDark = useDarkByDefault();

const toggleDark = useToggle(isDark);

function handleTransition(e: MouseEvent) {
    // Fallback for browsers that don’t support this API:
    // @ts-expect-error: Transition API
    if (!document.startViewTransition) {
        toggleDark();
        return;
    }

    // Get the click position, or fallback to the middle of the screen
    const x = e?.clientX ?? innerWidth / 2;
    const y = e?.clientY ?? innerHeight / 2;
    // Get the distance to the furthest corner
    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    );

    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
        toggleDark();
    });

    // Wait for the pseudo-elements to be created:
    transition.ready.then(() => {
        const clipPath = [
            `circle(0 at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
        ]
        // Animate the root’s new view
        document.documentElement.animate(
            {
                clipPath: isDark.value ? clipPath : clipPath.reverse(),
            },
            {
                duration: 500,
                easing: "ease-in",
                // Specify which pseudo-element to animate
                pseudoElement: isDark.value ? "::view-transition-new(root)" : "::view-transition-old(root)",
            }
        );
    });
}
</script>

<style>
::view-transition-image-pair(root) {
    isolation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
    display: block;
}

::view-transition-old(root) {
    z-index: 9999;
}

::view-transition-new(root) {
    z-index: 1;
}


.dark::view-transition-old(root) {
    z-index: 1;
}

.dark::view-transition-new(root) {
    z-index: 9999;
}
</style>