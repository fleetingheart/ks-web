<template>
    <div class="relative h-[100dvh] w-screen">
        <div class="ks-container p-8 relative">
            <header
                class="px-2 text-[1.1em] relative flex flex-row gap-5 w-[78%] justify-between"
                :class="{ 'cn-locale': isChineseLocale, 'jp-locale': isJapaneseLocale, 'ko-locale': isKoreanLocale }"
            >
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
                    <router-link
                        class="hover:text-black whitespace-nowrap dl-link"
                        :class="downloadCircle"
                        to="/download"
                    >{{ t('navigation.download') }}
                    </router-link>
                </div>
                <div>
                    <router-link class="hover:text-black whitespace-nowrap" to="/staff">{{ t('navigation.staff') }}</router-link>
                </div>
            </header>
            <router-link class="group absolute -right-9 -top-9 z-20" to="/">
                <img class="group-hover:hidden" src="/img/logo.webp" alt="Katawa Shoujo Logo">
                <img class="hidden group-hover:block" src="/img/logo-over.webp" alt="Katawa Shoujo Logo">
            </router-link>
            <router-view class="mt-9 max-h-[85%] bg-red-500/0 overflow-y-auto pr-2"></router-view>
        </div>
        <Footer class="absolute bottom-0"></Footer>
    </div>
</template>

<script setup lang="ts">
import Footer from './components/Footer.vue'
import { useI18n } from 'vue-i18n';
import { initTitleManager } from './services/titlemanager';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const { t, locale } = useI18n();
const isChineseLocale = computed(() => locale.value === 'zh' || locale.value === 'zh-TW');
const isJapaneseLocale = computed(() => locale.value === 'ja');
const isKoreanLocale = computed(() => locale.value === 'ko');
initTitleManager(t, useRouter());

const downloadCircle = computed(() => {
    switch(locale.value) {
        case 'zh':
            return 'dl-link-short'
        case 'zh-TW':
            return 'dl-link-short'
        case 'ja':
            return 'dl-link-long'
        case 'pt':
            return 'dl-link-long'
        case 'fi':
            return 'dl-link-short'
        default:
            return '';
    }
})
</script>

<style>

@font-face {
    font-family: Playtime;
    src: url('/fonts/playtime.woff2');
}

@font-face {
    font-family: Mikachan;
    src: url('/fonts/mikachan_trimmed.woff2');
}

@font-face {
    font-family: ZHCombo;
    src: url('/fonts/zh_combo_trimmed.woff2');
}

@font-face {
    font-family: NewGungsuh;
    src: url('/fonts/newgungsuh.woff2');
}

body {
    @apply bg-neutral-900 text-white text-xl;
    /* font-family: 'Poppins', sans-serif; */
    background: url('/img/mainbg.webp');
    color: #8D8375;
}

.ks-container {
    width: 640px;
    height: 480px;
    background: url('/img/innerbg.webp');
    @apply absolute left-[50%]
    top-[35%] sm:top-[45%] md:top-[50%]
    translate-x-[-50%] translate-y-[-50%]
    scale-[50%] sm:scale-[90%] md:scale-100;
}

header {
    font-family: Playtime;
}

header.cn-locale {
    font-family: ZHCombo;
    font-weight: 800;
}

header.ko-locale {
    font-family: NewGungsuh;
}

header.jp-locale {
    font-family: Mikachan;
}

header.jp-locale {
    @apply scale-[0.8] left-[-8%];
}

.router-link-active {
    @apply pointer-events-none text-black
}

.dl-link {
    position: relative;
}

.dl-link::before {
    content: url('/img/redcircle.webp');
    @apply absolute -z-10 left-[-10%] top-[-75%];
}

.dl-link-short::before {
    content: url('/img/redcircle_short.webp')!important;
    @apply left-[-30%];
}

.dl-link-long::before {
    content: url('/img/redcircle_long.webp')!important;
}

/* width */
::-webkit-scrollbar {
    width: 4px;
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