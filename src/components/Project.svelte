<script lang="ts">
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faWifi } from "@fortawesome/free-solid-svg-icons";
	import Button from "./Button.svelte";

	export let image: string;
	export let name: string;
	export let description: string;
	export let live: string;
	export let github: string;
</script>

<div class="bg-secondary grid grid-cols-1 xl:grid-cols-2 gap-8 p-8 mx-5 sm:mx-10 rounded-xl shadow-md">
	<img src={image} alt="Project" />
	<div class="flex justify-center items-center">
		<div class="text-center mt-6">
			<h3>{name}</h3>
			<h4 class="my-4">{description}</h4>
			<div class="flex justify-center">
				<slot />
			</div>
			<div class="flex-col justify-center my-4">
				<Button class="btn-accent mb-4 sm:mb-0" faIcon={faWifi} link={live}
					>Live Website</Button
				>
				<Button class="btn-accent" faIcon={faGithub} link={github}>Github Repository</Button
				>
			</div>
		</div>
	</div>
</div>
