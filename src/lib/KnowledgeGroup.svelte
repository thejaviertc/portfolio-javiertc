<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let title: string;
	export let faIcon: IconDefinition;
</script>

<div class="bg-secondary py-8 text-center rounded-xl shadow-xl">
	<h1><Fa icon={faIcon} /></h1>
	<h2 class="my-8">{title}</h2>
	<div class="grid grid-cols-2 gap-4 mx-10">
		<slot />
	</div>
</div>
