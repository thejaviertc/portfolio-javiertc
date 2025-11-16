<script lang="ts">
	import { faGithub } from "@fortawesome/free-brands-svg-icons";
	import { faWifi } from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";
	import Button from "./Button.svelte";

	export let image: string;
	export let name: string;
	export let description: string;
	export let live: string;
	export let github: string;
</script>

<div
	class="mx-5 grid grid-cols-1 gap-8 rounded-xl bg-secondary p-8 shadow-md sm:mx-10 xl:grid-cols-2"
>
	<img src={image} alt="Project" class="hidden sm:block" />
	<div class="flex items-center justify-center">
		<div class="mt-6 text-center">
			<h3>{name}</h3>
			<h4 class="my-4">{description}</h4>
			<div class="flex flex-wrap justify-center gap-8">
				<slot />
			</div>
			<div class="my-4 flex-col justify-center">
				<Button class="mb-4 btn-accent sm:mb-0" faIcon={faWifi} link={live}>
					{$_("actions.liveWebsite")}
				</Button>
				<Button class="btn-accent" faIcon={faGithub} link={github}>
					{$_("actions.github")}
				</Button>
			</div>
		</div>
	</div>
</div>
