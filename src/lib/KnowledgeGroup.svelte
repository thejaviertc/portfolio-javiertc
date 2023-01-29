<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import KnowledgeItem from "./KnowledgeItem.svelte";

	export let title: string;
	export let faIcon: IconDefinition;
	export let knowledgeItems: any;
</script>

<div
	class="bg-zinc-900 px-6 py-6 rounded-xl shadow-lg border-4 border-zinc-800 text-center"
>
	<h2>{title}</h2>
	<h1 class="my-6"><Fa icon={faIcon} /></h1>
	<div class="flex flex-wrap justify-center">
		{#each knowledgeItems as knowledge}
			<KnowledgeItem
				color={knowledge.color}
				logo={knowledge.logo}
				text={knowledge.text}
				usage={knowledge.usage}
				level={knowledge.level}
				date={knowledge.date}
			/>
		{/each}
	</div>
</div>
