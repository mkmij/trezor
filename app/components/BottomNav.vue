<script lang="ts" setup>
const selected = ref("home");

const changeSelection = (val: string) => (selected.value = val);
</script>

<template>
    <div class="absolute bottom-0 bg-primary-500 w-dvw text-primary-50 rounded-t-xl">
        <ul class="flex flex-row justify-around p-2">
            <BottomNavButton
                icon="mynaui:home"
                :selected="selected === 'home'"
                selectedName="home"
                @clicked="changeSelection"
                to="/"
            />
            <BottomNavButton
                icon="mynaui:list-solid"
                :selected="selected === 'transactions'"
                selectedName="transactions"
                @clicked="changeSelection"
                to="/transactions"
            />
            <BottomNavButton
                icon="mynaui:plus-circle"
                :selected="selected === 'add'"
                selectedName="add"
                @clicked="changeSelection"
                to="/add"
            />
            <BottomNavButton
                icon="mynaui:users"
                :selected="selected === 'team'"
                selectedName="team"
                @clicked="changeSelection"
                to="/team"
            />
            <BottomNavButton
                icon="mynaui:chart-no-axes-combined"
                :selected="selected === 'overview'"
                selectedName="overview"
                @clicked="changeSelection"
                to="/overview"
            />
        </ul>
    </div>
</template>
