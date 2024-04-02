<template>
    <div id="samples" class="flex flex-col gap-3 pageview">
        <div id="screenshots">
            <h1 class="font-bold">Full Version</h1>
            <div class="separator"></div>
            <viewer :images>
                <div class="inline-grid grid-cols-3 gap-2 p-2">
                    <img
                        class="grayscale hover:grayscale-0 cursor-pointer"
                        width="150"
                        v-for="src, k in images"
                        :src="src"
                        :key="src"
                        :alt="`Screenshot ${k+1}`"
                    />
                </div>
            </viewer>
        </div>
        <div id="music">
            <h1 class="font-bold">Music</h1>
            <div class="separator"></div>
            <iframe width="425" height="375" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1416187&amp;color=993333&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        </div>
        <div id="opening">
            <h1 class="font-bold">Opening</h1>
            <div class="separator"></div>
            <iframe width="425" height="344" src="https://www.youtube-nocookie.com/embed/4zAX0g6Drag?si=Syc0yCg2IUTu9HN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const images = Array(6).fill(0).map((_, i) => `/img/screenshot/screen_${i + 1}.jpg`);
console.log(images);
</script>

<style scoped>
</style>