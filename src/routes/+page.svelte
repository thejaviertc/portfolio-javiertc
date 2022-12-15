<script lang="ts">
	import Button from "$lib/Button.svelte";
	import Knowledge from "$lib/Knowledge.svelte";
	import Project from "$lib/Project.svelte";
	import TLevel from "$lib/TLevel";
	import TUsage from "$lib/TUsage";
	import {
		faGithub,
		faSteam,
		faTwitter,
	} from "@fortawesome/free-brands-svg-icons";
	import {
		faAngleDown,
		faCode,
		faMoon,
		faSun,
	} from "@fortawesome/free-solid-svg-icons";
	import { onMount } from "svelte";
	import Fa from "svelte-fa";

	let html: any;
	let isDark: boolean;

	onMount(() => {
		html = document.querySelector("html");
		isDark = isDarkMode();
	});

	function isDarkMode(): boolean {
		if (html) return html.classList.contains("dark");
		else return false;
	}

	function toggleDarkMode() {
		if (html) {
			if (isDarkMode()) {
				html.classList.remove("dark");
				isDark = false;
			} else {
				html.classList.add("dark");
				isDark = true;
			}
		}
	}
</script>

<svelte:head>
	<title>Javiertc's Portfolio</title>
</svelte:head>

<button
	class="bg-blue-400 hover:bg-blue-600 px-3 py-2 bottom-4 right-4 fixed text-white rounded-full"
	on:click={toggleDarkMode}
>
	{#if isDark}
		<Fa icon={faMoon} />
	{:else}
		<Fa icon={faSun} />
	{/if}
</button>
<section
	id="home"
	class="bg-white dark:bg-zinc-900 min-h-screen flex justify-center items-center"
>
	<div>
		<img
			class="mx-auto h-36 rounded-full"
			src="https://avatars.akamai.steamstatic.com/ec9f8b753df977a12e6cad632a14cc1a50b3e0b0_full.jpg"
			alt="Profile"
		/>
		<div class="my-6 text-center">
			<h1
				class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
			>
				Javiertc <Fa icon={faCode} class="text-blue-500" />
			</h1>
			<h2
				class="py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
			>
				Software Engineering Student
			</h2>
		</div>
		<div class="flex justify-center my-6">
			<Button
				faIcon={faGithub}
				link="https://github.com/thejaviertc"
				text="Github"
			/>
			<Button
				faIcon={faTwitter}
				link="https://twitter.com/javiertcesp"
				text="Twitter"
			/>
			<Button
				faIcon={faSteam}
				link="https://steamcommunity.com/id/javiertc/"
				text="Steam"
			/>
		</div>
		<div class="flex justify-center">
			<Button faIcon={faAngleDown} link="#knowledge" text="Let's Go" />
		</div>
	</div>
</section>
<section
	id="knowledge"
	class="bg-rose-50 dark:bg-black dark:text-gray-100 py-10 md:py-14"
>
	<h2 class="pb-10 md:pb-14 text-center">Knowledge</h2>
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-10 md:mx-32"
	>
		<!-- TODO: #417 Use a Date instead of static text  -->
		<Knowledge
			title="HTML"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
			usage={TUsage.ALWAYS}
			level={TLevel.PROFICIENT}
			time="+4 years"
		/>
		<Knowledge
			title="CSS"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
			usage={TUsage.OFTEN}
			level={TLevel.ADVANCED}
			time="+4 years"
		/>
		<Knowledge
			title="Sass"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
			usage={TUsage.OFTEN}
			level={TLevel.NOVICE}
			time="5 months"
		/>
		<Knowledge
			title="Bootstrap"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
			usage="{TUsage.RARELY} (Learning Tailwind)"
			level={TLevel.PROFICIENT}
			time="5 months"
		/>
		<Knowledge
			title="Tailwind CSS"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
			usage={TUsage.RARELY}
			level={TLevel.NOVICE}
			time="Just Starting"
		/>
		<Knowledge
			title="Javascript"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
			usage={TUsage.USUALLY}
			level={TLevel.COMPETENT}
			time="+3 years"
		/>
		<Knowledge
			title="Typescript"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
			usage={TUsage.ALWAYS}
			level={TLevel.COMPETENT}
			time="Almost 1 year"
		/>
		<Knowledge
			title="React"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
			usage="{TUsage.RARELY} (Now using Svelte)"
			level={TLevel.ADVANCED}
			time="Almost 1 year"
		/>
		<Knowledge
			title="Svelte"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
			usage={TUsage.USUALLY}
			level={TLevel.NOVICE}
			time="Just Starting"
		/>
		<Knowledge
			title="NodeJS"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
			usage={TUsage.USUALLY}
			level={TLevel.COMPETENT}
			time="+1 years"
		/>
		<Knowledge
			title="NPM"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
			usage={TUsage.USUALLY}
			level={TLevel.COMPETENT}
			time="+1 years"
		/>
		<Knowledge
			title="Java"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
			usage={TUsage.RARELY}
			level={TLevel.COMPETENT}
			time="+2 years"
		/>
		<Knowledge
			title="MySQL"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
			usage={TUsage.SOMETIMES}
			level={TLevel.COMPETENT}
			time="+1 year"
		/>
		<Knowledge
			title="VSCode"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
			usage={TUsage.ALWAYS}
			level={TLevel.COMPETENT}
			time="+3 years"
		/>
		<Knowledge
			title="Git"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
			usage={TUsage.ALWAYS}
			level={TLevel.ADVANCED}
			time="+2 years"
		/>
		<Knowledge
			title="Github"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
			usage={TUsage.ALWAYS}
			level={TLevel.COMPETENT}
			time="+2 years"
		/>
		<Knowledge
			title="Linux"
			image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
			usage={TUsage.USUALLY}
			level={TLevel.ADVANCED}
			time="+1 year"
		/>
	</div>
</section>
<section
	id="projects"
	class="dark:bg-zinc-900 dark:text-gray-100 py-10 md:py-14"
>
	<h2 class="pb-10 md:pb-14 text-center">Current Projects</h2>
	<div class="mx-10 md:mx-32">
		<Project
			image="https://repository-images.githubusercontent.com/289227137/bab81a80-7abc-11eb-8c63-37afc324cb8b"
			name="Steam Workshop Stats"
			description="See the views, subscriptions and favs of your Steam
			Workshop addons!"
			badges={[
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
			]}
			live="https://thejaviertc.github.io/steam-workshop-stats/"
			github="https://github.com/thejaviertc/steam-workshop-stats"
		/>
	</div>
</section>
