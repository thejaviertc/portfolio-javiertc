<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let title: string;
	export let faIcon: IconDefinition;
</script>

<div class="{$$props.class} rounded-xl bg-secondary p-8 shadow-md">
	<h3 class="mb-8 text-center"><Fa icon={faIcon} /> {title}</h3>
	<div class="flex flex-wrap gap-8">
		<slot />
	</div>
</div>
