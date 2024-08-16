<template>
    <div class="character" :id="character">
        <h2
            class="font-bold"
            :style="isMinor ? 'font-size: 0.8em;' : ''"
        >{{ t(`chardata.${character}.name`) }}</h2>
        <div class="separator"></div>
        <div class="flex flex-row gap-1">
            <div class="flex-none">
                <img class="w-[180px]" :src="`/img/char/char_${character}.webp`" :alt="t(`chardata.${character}.name`)">
            </div>
            <div class="character-detail ks-pagetext">
                <div v-if="isDetailed">
                    <ul>
                        <li>{{ t(`statstrings.bday`) }}: {{ t(`chardata.${character}.birthday`) }}</li>
                        <li>{{ t(`statstrings.zodiac`) }}: {{ t(`chardata.${character}.zodiac`) }}</li>
                        <li>{{ t(`statstrings.btype`) }}: {{ t(`chardata.${character}.btype`) }}</li>
                        <li>{{ t(`statstrings.height`) }}: {{ commonData[character].height }} {{ t(`statstrings.cm`) }}</li>
                        <li>{{ t(`statstrings.weight`) }}: {{ commonData[character].weight }} {{ t(`statstrings.kg`) }}</li>
                        <li>{{ t(`statstrings.threes`) }}: {{ commonData[character].sizes.join("/") }}</li>
                        <li>{{ t(`statstrings.hair`) }}: {{ t(`chardata.${character}.hairColor`) }}</li>
                        <li>{{ t(`statstrings.eyes`) }}: {{ t(`chardata.${character}.eyeColor`) }}</li>
                    </ul>
                    <br>
                </div>
                <p>{{ t(`chardata.${character}.description`) }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

type Props = {
    character: 'hisao' | 'emi' | 'rin' | 'shizune' | 'misha' | 'hanako' | 'lilly' | 'kenji' | 'nurse' | 'muto' | 'yuuko'
    isDetailed: boolean,
    isMinor: boolean
}

const {
    character,
    isDetailed,
    isMinor
} = defineProps<Props>();

const characters = ["shizune", "emi", "rin", "hanako", "lilly"];
const commonData = {
    emi: {
        sizes: [70, 51, 74],
        height: 151,
        weight: 41
    },
    hanako: {
        sizes: [86, 56, 84],
        height: 164,
        weight: 52
    },
    lilly: {
        sizes: [89, 61, 89],
        height: 171,
        weight: 59
    },
    rin: {
        sizes: [83, 54, 78],
        height: 161,
        weight: 50
    },
    shizune: {
        sizes: [88, 52, 85],
        height: 158,
        weight: 53
    },
    misha: {
        sizes: [85, 58, 84],
        height: 158,
        weight: 57
    }
};
</script>

<style scoped>
ul {
    list-style-type: disc;
    padding-inline-start: 1.5em;
}
</style>
