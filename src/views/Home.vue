<template>
    <div
        id="home"
        class="flex flex-col items-center justify-center h-full relative" 
        :class="{ 'kanji-locale': isKanjiLocale }"
    >
        <router-link
            :to="`/characters#${randChar}`"
            class="text-3xl mb-12 text-center"
        >{{ t(`taglines.${randChar}`) }}</router-link>
        <div class="absolute bottom-0 flex flex-col">
            <img src="/img/line-s.png" alt="Seperator" class="w-48 mx-auto">
            <div class="flex flex-row gap-4 mt-3">
                <a target="_blank" href="https://katawashoujo.blogspot.com/">{{ t(`footer.blog`) }}</a>
                <a target="_blank" href="http://ks.fhs.sh/">{{ t(`footer.forum`) }}</a>
                <a target="_blank" href="http://shimmie.katawa-shoujo.com/">Shimmie</a>
                <a target="_blank" href="irc://irc.irchighway.net/katawa-shoujo">IRC</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useIsKanjiLocale } from '@/i18n/provider';

const { t, locale } = useI18n();
const characters = ["shizune", "emi", "rin", "hanako", "lilly"];
const randChar = characters[Math.floor(Math.random() * characters.length)];
const isKanjiLocale = useIsKanjiLocale(locale);
</script>

<style scoped>
a:hover {
    @apply text-black;
}

#home {
    font-family: 'Playtime';
}

#home.kanji-locale a {
    font-family: 'Mikachan';
}
</style>
