<script lang="ts">
	import { faLanguage } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { _, locale } from "svelte-i18n";

	/**
	 * Changes the website language to the selected
	 */
	function changeLanguage(e: Event) {
		e.preventDefault();

		const language = (e.target as HTMLButtonElement).value;
		locale.set(language);
		localStorage.setItem("lang", language);
	}
</script>

<div class="dropdown dropdown-end">
	<button tabindex="-1" class="btn text-sm text-gray-100 normal-case btn-ghost md:text-base">
		<Fa class="mr-2" icon={faLanguage} />
		{$_("actions.changeLanguage")}
	</button>
	<ul
		tabindex="-1"
		class="menu-compact dropdown-content menu mt-3 w-52 rounded-box bg-secondary p-2 shadow-sm"
	>
		<li>
			<button on:click={changeLanguage} value="en" class="text-lg">
				🇬🇧 {$_("language", { locale: "en" })}
			</button>
		</li>
		<li>
			<button on:click={changeLanguage} value="es" class="text-lg">
				🇪🇸 {$_("language", { locale: "es" })}
			</button>
		</li>
	</ul>
</div>
