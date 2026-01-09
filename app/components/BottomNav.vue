<script lang="ts" setup>
const selected = ref("home");

const changeSelection = (val: string) => (selected.value = val);
</script>

<template>
    <div class="absolute bottom-0 bg-primary-600 w-dvw text-primary-50 rounded-t-xl">
        <ul class="flex flex-row justify-around px-2 pt-2 pb-1">
            <BottomNavButton
                icon="mynaui:home"
                :selected="selected === 'home'"
                selectedName="home"
                @clicked="changeSelection"
            />
            <BottomNavButton
                icon="mynaui:list-solid"
                :selected="selected === 'transactions'"
                selectedName="transactions"
                @clicked="changeSelection"
            />
            <BottomNavButton
                icon="mynaui:plus-circle"
                :selected="selected === 'add'"
                selectedName="add"
                @clicked="changeSelection"
            />
            <BottomNavButton
                icon="mynaui:users"
                :selected="selected === 'team'"
                selectedName="team"
                @clicked="changeSelection"
            />
            <BottomNavButton
                icon="mynaui:chart-no-axes-combined"
                :selected="selected === 'overview'"
                selectedName="overview"
                @clicked="changeSelection"
            />
        </ul>
    </div>
</template>
