<template>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const characters = ["shizune", "emi", "rin", "hanako", "lilly"];
const commonData = {
    emi: {
        sizes: [70, 51, 74],
        btype: "B",
        height: 151,
        weight: 41
    },
    hanako: {
        sizes: [86, 56, 84],
        btype: "AB",
        height: 164,
        weight: 52
    },
    lilly: {
        sizes: [89, 61, 89],
        btype: "A",
        height: 171,
        weight: 59
    },
    rin: {
        sizes: [83, 54, 78],
        btype: "AB",
        height: 161,
        weight: 50
    },
    shizune: {
        sizes: [88, 52, 85],
        btype: "O",
        height: 158,
        weight: 53
    },
    misha: {
        sizes: [85, 58, 84],
        btype: "AB",
        height: 158,
        weight: 57
    }
};
const distanceUnit = "cm";
const weightUnit = "kg";
</script>