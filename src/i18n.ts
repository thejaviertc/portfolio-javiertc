import { browser } from "$app/environment";
import { addMessages, getLocaleFromNavigator, init } from "svelte-i18n";

import en from "./languages/en.json";
import es from "./languages/es.json";

addMessages("en", en);
addMessages("es", es);

let defaultLanguage: string = getLocaleFromNavigator() as string;

if (browser) {
	const lang = localStorage.getItem("lang");

	if (lang) {
		defaultLanguage = lang;
	} else {
		localStorage.setItem("lang", defaultLanguage);
	}
}

init({
	fallbackLocale: "en",
	initialLocale: defaultLanguage,
});