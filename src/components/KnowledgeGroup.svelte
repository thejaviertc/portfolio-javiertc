<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

	export let title: string;
	export let faIcon: IconDefinition;
</script>

<div class="{$$props.class} bg-secondary rounded-xl shadow-md p-8">
	<h3 class="text-center mb-8"><Fa icon={faIcon} /> {title}</h3>
	<div class="flex flex-wrap gap-8">
		<slot />
	</div>
</div>
