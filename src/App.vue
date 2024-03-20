<template>
    <div class="relative h-screen w-screen">
        <div class="ks-container p-8 relative">
            <header class="px-2 text-[1.1em] relative flex flex-row gap-5 w-[78%] justify-between">
                <div>
                    <router-link class="hover:text-black whitespace-nowrap" to="/about">{{ t('navigation.about') }}</router-link>
                </div>
                <div>
                    <router-link class="hover:text-black whitespace-nowrap" to="/characters">{{ t('navigation.characters') }}</router-link>
                </div>
                <div>
                    <router-link class="hover:text-black whitespace-nowrap" to="/samples">{{ t('navigation.samples') }}</router-link>
                </div>
                <div>
                    <router-link class="hover:text-black whitespace-nowrap" to="/download">{{ t('navigation.download') }}</router-link>
                </div>
                <div>
                    <router-link class="hover:text-black whitespace-nowrap" to="/staff">{{ t('navigation.staff') }}</router-link>
                </div>
            </header>
            <router-link class="group absolute -right-9 -top-9 z-20" to="/">
                <img class="group-hover:hidden" src="/img/logo.png" alt="Katawa Shoujo Logo">
                <img class="hidden group-hover:block" src="/img/logo-over.png" alt="Katawa Shoujo Logo">
            </router-link>
            <router-view class="mt-8 max-h-[85%] bg-red-500/0"></router-view>
        </div>
        <Footer class="absolute bottom-0"></Footer>
    </div>
</template>

<script setup>
import Footer from './components/Footer.vue'
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

@font-face {
    font-family: Playtime;
    src: url('/fonts/playtime.ttf');
}

body {
    @apply bg-neutral-900 text-white text-xl;
    font-family: 'Poppins', sans-serif;
    background: url('/img/mainbg.png');
    color: #8D8375;
}

.ks-container {
    width: 640px;
    height: 480px;
    background: url('/img/innerbg_release.jpg');
    @apply absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%];
}

header {
    font-family: Playtime;
}

.router-link-active {
    @apply pointer-events-none text-black
}

/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #8e8677
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #6b655a;
}
</style>