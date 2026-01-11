<script lang="ts" setup>
const selected = ref("home");

const changeSelection = (val: string) => (selected.value = val);
</script>

<template>
    <div class="text-primary-600 w-xs rounded-full shadow-lg ring ring-gray-400/15 mx-auto mb-2.5">
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
