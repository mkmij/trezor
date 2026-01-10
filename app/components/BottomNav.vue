<script lang="ts" setup>
const selected = ref("home");

const changeSelection = (val: string) => (selected.value = val);
</script>

<template>
    <div class="absolute bottom-0 bg-primary-500 w-dvw text-primary-50 rounded-t-xl">
        <ul class="flex flex-row justify-around p-2">
            <BottomNavLink
                icon="mynaui:home-solid"
                :selected="selected === 'home'"
                selectedName="home"
                @clicked="changeSelection"
                to="/dashboard"
            />
            <BottomNavLink
                icon="mynaui:list-solid"
                :selected="selected === 'transactions'"
                selectedName="transactions"
                @clicked="changeSelection"
                to="/transactions"
            />
            <BottomNavLink
                icon="mynaui:plus-circle-solid"
                :selected="selected === 'add'"
                selectedName="add"
                @clicked="changeSelection"
                to="/add"
            />
            <BottomNavLink
                icon="mynaui:users-solid"
                :selected="selected === 'team'"
                selectedName="team"
                @clicked="changeSelection"
                to="/team"
            />
            <BottomNavLink
                icon="mynaui:chart-no-axes-combined-solid"
                :selected="selected === 'overview'"
                selectedName="overview"
                @clicked="changeSelection"
                to="/overview"
            />
        </ul>
    </div>
</template>
