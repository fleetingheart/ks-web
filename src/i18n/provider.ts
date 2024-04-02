// i18n provider
import * as VueI18n from "vue-i18n";
import { taglines } from "./taglines";
import { navigation } from "./navigation";
import { characters } from "./characters";
import { about } from "./about";
import { WritableComputedRef } from "vue";

function deepMerge(...objects) {
    const merged = {};

    // Iterate through all objects
    objects.forEach(obj => {
        // Iterate through all keys in the object
        for (const key in obj) {
            // Check if the key exists in the merged object and if both values are objects
            if (key in merged && typeof merged[key] === 'object' && typeof obj[key] === 'object') {
                // Recursively merge the nested objects
                merged[key] = deepMerge(merged[key], obj[key]);
            } else {
                // If the key doesn't exist in the merged object or if the values are not objects, overwrite the merged value
                merged[key] = obj[key];
            }
        }
    });

    return merged;
}

console.time('[i18nProvider] Merging strings');
const strings = deepMerge(taglines, navigation, characters, about);
console.timeEnd('[i18nProvider] Merging strings');
// TODO: zh-TW cannot be detected this way, maybe fix it later
const locales = ['en', 'cs', 'de', 'es', 'fi', 'fr', 'hu', 'it', 'ko', 'pt', 'ja', 'zh', 'zh-TW'];
const defaultLocale = locales.find(l => l === navigator.language.split('-')[0]) ?? 'en';
console.log('[i18nProvider] Default locale is', defaultLocale);
const storedLocale = localStorage.getItem('locale');
console.log('[i18nProvider] Stored locale is', storedLocale);
const finalLocale = storedLocale ?? defaultLocale;
console.log('[i18nProvider] Final locale is', finalLocale);


export const i18nInstance = VueI18n.createI18n({
    legacy: false,
    locale: finalLocale,
    fallbackLocale: 'en',
    messages: strings,
});

export function persistentChangeLocale(instance: WritableComputedRef<string>, newLocale: string) {
    instance.value = newLocale;
    localStorage.setItem('locale', newLocale);
    console.log('[i18nProvider] Locale changed to', newLocale);
}