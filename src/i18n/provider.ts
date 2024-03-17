// i18n data provider
import { taglines } from "./taglines";
import { navigation } from "./navigation";
import { characters } from "./characters";

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

export default deepMerge(taglines, navigation, characters)