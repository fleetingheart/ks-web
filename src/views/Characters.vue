<template>
    <div id="characters" class="flex flex-col gap-3 pageview">
        <Character character="hisao" :is-minor="false" :is-detailed="false"/>
        <Character character="emi" :is-minor="false" :is-detailed="true"/>
        <Character character="hanako" :is-minor="false" :is-detailed="true"/>
        <Character character="lilly" :is-minor="false" :is-detailed="true"/>
        <Character character="rin" :is-minor="false" :is-detailed="true"/>
        <Character character="shizune" :is-minor="false" :is-detailed="true"/>
        <Character character="misha" :is-minor="false" :is-detailed="true"/>
        <div id="minor-characters">
            <h1 class="font-bold">{{ t('statstrings.minors') }}</h1>
            <div class="separator"></div>
        </div>
        <Character character="kenji" :is-minor="true" :is-detailed="false"/>
        <Character character="nurse" :is-minor="true" :is-detailed="false"/>
        <Character character="muto" :is-minor="true" :is-detailed="false"/>
        <Character character="yuuko" :is-minor="true" :is-detailed="false"/>

    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Character from '@/components/Character.vue';
const { t } = useI18n();
</script>

<style scoped>
</style>