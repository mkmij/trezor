<script lang="ts" setup>
const props = defineProps<{
    icon: string;
    size?: string;
    selected: boolean;
    selectedName: string;
}>();

const emit = defineEmits<{
    (e: "clicked", value: string): void;
}>();
</script>

<template>
    <NuxtLink @click="emit('clicked', props.selectedName)">
        <li :class="{ 'border-b': props.selected }">
            <Icon :name="props.icon" :size="props.size || 28" />
        </li>
    </NuxtLink>
</template>
