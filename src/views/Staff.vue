<template>
    <div id="about" class="pageview">
        <viewer :images="['/img/concept.jpg']">
            <div class="hidden">
                <img
                    id="concept-img-viewer"
                    src="/img/concept.jpg"
                    key="/img/concept.jpg"
                />
            </div>
        </viewer>
        <div class="ks-pagetext" v-html="t('staff.content')"></div>
    </div>
</template>

<script setup lang="ts">
import { watch, nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

function addSeparators() {
    document.querySelectorAll('.ks-pagetext > h1, h2, h3').forEach((el: HTMLHeadingElement) => {
        el.insertAdjacentHTML('afterend', '<div class="separator"></div>');
    });
    console.log("[Staff] Added separators.")
}

onMounted(() => {
    addSeparators();

    // Clicking the image from any language will open the viewer
    // TODO: A bit of a hack, but it works
    document.addEventListener('click', e => {
        if ((e.target as HTMLElement).id === 'concept-img') {
            document.getElementById('concept-img-viewer')?.click();
        }
    })
});

watch(locale, () => {
    nextTick(() => {
        addSeparators();
    });
});
</script>

<style>
#concept-img {
    @apply inline float-left mr-4 mb-1 w-[102px] h-[150px] grayscale hover:grayscale-0 cursor-pointer;
}

h1, h2, h3 {
    @apply text-black font-bold;
}

h2 {
    @apply text-[1.12em] mb-0.5;
}

h2:not(:first-child) {
    @apply mt-2;
}

h3 {
    @apply text-[0.9em] mt-2;
}

ul {
    @apply list-disc ml-10;
}
</style>