<template>
    <div class="about">
        <h1 class="text-black font-bold">{{ t('about.title') }}</h1>
        <div class="separator"></div>
        <div class="leading-5 text-[0.9em]">
            <img class="inline float-left mr-4 mb-1" src="/img/sd-chars.png" alt="Characters">
            <p>{{ t('about.intro') }}</p>
            <br>
            <p v-html="t('about.gameplay')"></p>
            <br>
            <p v-html="t('about.info')"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch, nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
const { t, locale } = useI18n();
const $router = useRouter();

// WARN: v-html is not recommended, but i18n strings tie our hands
// v-html will not convert <a href="..."> to <router-link to="...">, so we need to do it manually
function fixLinks() {
    document.querySelectorAll('.about a').forEach((el: HTMLAnchorElement) => {
        // If link is not relative, do nothing
        if (!el.href.startsWith(window.location.origin)) return;

        el.addEventListener('click', (e) => {
            e.preventDefault();
            $router.push(el.href);
        });
    });
    console.log("[About] Fixed links.")
}

onMounted(() => {
    fixLinks();
});

watch(locale, () => {
    nextTick(() => {
        fixLinks();
    });
});
</script>

<style>
.about {
    font-family: sans-serif;
    color: black;
    font-size: 0.8em;
}

.separator {
    background-image: url('/img/underline.png');
    background-repeat: no-repeat;
    background-position: left;
    height: 10px;
    transform: translateY(-7px);
}

.about a {
    color: #993333;
}

.about a:hover {
    text-decoration: underline;
}
</style>