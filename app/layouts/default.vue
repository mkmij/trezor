<template class="flex flex-col min-h-screen">
    <header class="sticky top-0 z-40">
        <TopBar/>
    </header>
    <main>
        <slot class="flex-1" />
    </main>
    <footer class="fixed bottom-0 left-0 right-0">
        <BottomNav/>
    </footer>
</template>