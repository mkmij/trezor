import type { ComponentPublicInstance } from "vue";

export const useClickOutside = (componentRef: Ref<ComponentPublicInstance | null>, callback: () => void) => {
    const handler = (event: MouseEvent) => {
        const element = componentRef.value?.$el;
        if (element && !element.contains(event.target as Node)) {
            callback();
        }
    };

    onMounted(() => {
        document.addEventListener('click', handler);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handler);
    });
}