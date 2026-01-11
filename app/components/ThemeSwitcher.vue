<script setup lang="ts">
    const colorMode = useColorMode();

    const isDark = computed({
        get() {
            return colorMode.value === "dark";
        },
        set(value) {
            colorMode.preference = value ? "dark" : "light";
        },
    });
    const props = defineProps<{
        labelText: string;
    }>();
</script>

<template class="flex flex-row justify-between">
    <label class="swap swap-rotate">    
    <input type="checkbox" class="theme-controller" v-model="isDark"/>

    <Icon name="mynaui:sun" size="24" class="swap-on"/>
    <Icon name="mynaui:moon" size="24" class="swap-off"/>
    
    </label>
    <span @click="isDark = !isDark">{{ props.labelText }}</span>
</template>