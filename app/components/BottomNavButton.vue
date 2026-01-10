<script lang="ts" setup>
const props = defineProps<{
    icon: string;
    size?: string;
    selected: boolean;
    selectedName: string;
    to: string;
}>();

const emit = defineEmits<{
    (e: "clicked", value: string): void;
}>();
</script>

<template>
    <NuxtLink :to="props.to" @click="emit('clicked', props.selectedName)">
        <li :class="{ 'border-b-2': props.selected }">
            <Icon :name="props.icon" :size="props.size || 28" />
        </li>
    </NuxtLink>
</template>
