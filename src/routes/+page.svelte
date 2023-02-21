<script lang="ts">
	import Button from "$lib/Button.svelte";
	import TLevel from "$lib/enums/TLevel";
	import TUsage from "$lib/enums/TUsage";
	import KnowledgeGroup from "$lib/KnowledgeGroup.svelte";
	import Project from "$lib/Project.svelte";
	import { faGithub, faSteam, faTwitter } from "@fortawesome/free-brands-svg-icons";
	import {
		faAngleDown,
		faCode,
		faComputer,
		faDatabase,
		faLongArrowAltUp,
		faServer,
		faTools,
		faWindowMaximize,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
</script>

<svelte:head>
	<title>Javiertc's Portfolio</title>
</svelte:head>

<a
	class="bg-blue-400 hover:bg-blue-600 px-3 py-2 bottom-4 right-4 fixed text-white rounded-full"
	href="#home"
>
	<Fa icon={faLongArrowAltUp} />
</a>
<section id="home" class="bg-zinc-900 min-h-screen flex justify-center items-center">
	<div>
		<img
			class="mx-auto h-36 rounded-full"
			src="https://avatars.akamai.steamstatic.com/ec9f8b753df977a12e6cad632a14cc1a50b3e0b0_full.jpg"
			alt="Profile"
		/>
		<div class="my-6 text-center">
			<h1 class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
				Javiertc <Fa icon={faCode} class="text-blue-500" />
			</h1>
			<h2
				class="py-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
			>
				Software Engineering Student
			</h2>
		</div>
		<div class="flex justify-center my-6">
			<Button faIcon={faGithub} link="https://github.com/thejaviertc" text="Github" />
			<Button faIcon={faTwitter} link="https://twitter.com/javiertcesp" text="Twitter" />
			<Button faIcon={faSteam} link="https://steamcommunity.com/id/javiertc/" text="Steam" />
		</div>
		<div class="flex justify-center">
			<Button faIcon={faAngleDown} link="#knowledge" text="Let's Go" />
		</div>
	</div>
</section>
<section id="knowledge" class="bg-black text-gray-100 py-10 md:py-14">
	<h2 class="pb-10 md:pb-14 text-center">Knowledge</h2>
	<div class="flex flex-wrap justify-center gap-6 mx-4 sm:mx-10">
		<KnowledgeGroup
			title="Website Frontend"
			faIcon={faWindowMaximize}
			knowledgeItems={[
				{
					color: "bg-orange-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
					text: "HTML",
					usage: TUsage.ALWAYS,
					level: TLevel.ADVANCED,
					date: new Date("2020"),
				},
				{
					color: "bg-sky-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
					text: "CSS",
					usage: TUsage.SOMETIMES,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
				{
					color: "bg-pink-400",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
					text: "Sass",
					usage: TUsage.SOMETIMES,
					level: TLevel.MINIMAL,
					date: new Date("August 1, 2022"),
				},
				{
					color: "bg-teal-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
					text: "Tailwind CSS",
					usage: TUsage.ALWAYS,
					level: TLevel.BASIC,
					date: new Date("August 1, 2022"),
				},
				{
					color: "bg-orange-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
					text: "Svelte",
					usage: TUsage.ALWAYS,
					level: TLevel.COMPETENT,
					date: new Date("August 1, 2022"),
				},
				{
					color: "bg-orange-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
					text: "SvelteKit",
					usage: TUsage.ALWAYS,
					level: TLevel.BASIC,
					date: new Date("September 1, 2022"),
				},
			]}
		/>
		<KnowledgeGroup
			title="Website Backend"
			faIcon={faServer}
			knowledgeItems={[
				{
					color: "bg-yellow-400",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
					text: "Javascript",
					usage: TUsage.SOMETIMES,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
				{
					color: "bg-blue-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
					text: "Typescript",
					usage: TUsage.ALWAYS,
					level: TLevel.COMPETENT,
					date: new Date("2021"),
				},
				{
					color: "bg-green-600",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
					text: "NodeJS",
					usage: TUsage.ALWAYS,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
			]}
		/>
		<KnowledgeGroup
			title="Desktop"
			faIcon={faComputer}
			knowledgeItems={[
				{
					color: "bg-orange-400",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
					text: "Java",
					usage: TUsage.RARELY,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
				{
					color: "bg-fuchsia-900",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
					text: "C#",
					usage: TUsage.SOMETIMES,
					level: TLevel.BASIC,
					date: new Date("December 4, 2022"),
				},
			]}
		/>
		<KnowledgeGroup
			title="Databases"
			faIcon={faDatabase}
			knowledgeItems={[
				{
					color: "bg-blue-400",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
					text: "MySQL",
					usage: TUsage.SOMETIMES,
					level: TLevel.COMPETENT,
					date: new Date("2021"),
				},
			]}
		/>
		<KnowledgeGroup
			title="Tools"
			faIcon={faTools}
			knowledgeItems={[
				{
					color: "bg-sky-700",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
					text: "VSCode",
					usage: TUsage.ALWAYS,
					level: TLevel.ADVANCED,
					date: new Date("2020"),
				},
				{
					color: "bg-amber-500",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
					text: "Git",
					usage: TUsage.ALWAYS,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
				{
					color: "bg-gray-700",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
					text: "Github",
					usage: TUsage.ALWAYS,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
				{
					color: "bg-slate-900",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
					text: "Linux",
					usage: TUsage.ALWAYS,
					level: TLevel.COMPETENT,
					date: new Date("2021"),
				},
				{
					color: "bg-red-400",
					logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
					text: "NPM",
					usage: TUsage.SOMETIMES,
					level: TLevel.COMPETENT,
					date: new Date("2020"),
				},
			]}
		/>
	</div>
</section>
<section id="projects" class="bg-zinc-900 text-gray-100 py-10 md:py-14">
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
