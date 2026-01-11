<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue';

const isMenuOpen = ref(false);
const menuRef = useTemplateRef<ComponentPublicInstance | null>('menuRef');

const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;

useClickOutside(menuRef, () => {
    if (isMenuOpen.value) {
        isMenuOpen.value = false;
    }
});
</script>

<template>
    <div
        class="flex flex-row gap-2 align-middle items-center justify-between p-4 min-w-dvw text-primary-600 bg-base-200">
        <div class="flex flex-row gap-2 items-end">
            <Icon name="mynaui:bank" size="30" /><span class="text-xl font-bold">trezor</span>
        </div>
        <div class="avatar" @click.stop="toggleMenu">
            <div class="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
            </div>
        </div>
    </div>
    <Menu v-if="isMenuOpen" ref="menuRef"/>

</template>