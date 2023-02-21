<script lang="ts">
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faWifi } from "@fortawesome/free-solid-svg-icons";
	import Badge from "./Badge.svelte";
	import Button from "./Button.svelte";

	export let image: string;
	export let name: string;
	export let description: string;
	export let badges: string[];
	export let live: string;
	export let github: string;
</script>

<div class="bg-black grid grid-cols-1 lg:grid-cols-2 p-6 mb-10 rounded-xl">
	<img src={image} alt="Project" />
	<div class="flex justify-center items-center ml-2">
		<div class="text-center mt-6">
			<h3>{name}</h3>
			<h4 class="my-3">{description}</h4>
			<div class="grid lg:flex lg:justify-center grid-cols-2 sm:grid-cols-3">
				{#each badges as badge}
					<Badge logo={badge} />
				{/each}
			</div>
			<div class="flex justify-center my-6">
				<Button faIcon={faWifi} link={live} text="Live Website" />
				<Button faIcon={faGithub} link={github} text="Github Repository" />
			</div>
		</div>
	</div>
</div>
