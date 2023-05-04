<script lang="ts">
	import Badge from "$lib/Badge.svelte";
	import Button from "$lib/Button.svelte";
	import TLevel from "$lib/enums/TLevel";
	import TUsage from "$lib/enums/TUsage";
	import KnowledgeGroup from "$lib/KnowledgeGroup.svelte";
	import KnowledgeItem from "$lib/KnowledgeItem.svelte";
	import Project from "$lib/Project.svelte";
	import { faGithub, faSteam } from "@fortawesome/free-brands-svg-icons";
	import {
		faAngleDown,
		faCode,
		faComputer,
		faDatabase,
		faTools,
		faWindowMaximize,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
</script>

<svelte:head>
	<title>Javiertc's Portfolio</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h1>Javiertc <Fa icon={faCode} /></h1>
	<h2 class="my-4">Software Engineering Student</h2>
	<div class="my-6">
		<Button class="btn-accent" faIcon={faGithub} link="https://github.com/thejaviertc"
			>Github</Button
		>
		<Button class="btn-accent" faIcon={faSteam} link="https://steamcommunity.com/id/javiertc/"
			>Steam</Button
		>
	</div>
	<Button class="btn-accent" faIcon={faAngleDown} link="#knowledge">Let's Go</Button>
</section>
<section id="knowledge" class="py-16">
	<h2 class="pb-14 text-center">Knowledge</h2>
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-10 mx-5 sm:mx-10">
		<KnowledgeGroup title="Website Frontend" faIcon={faWindowMaximize}>
			<KnowledgeItem
				class="bg-orange-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
				text="HTML"
				usage={TUsage.ALWAYS}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-sky-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
				text="CSS"
				usage={TUsage.SOMETIMES}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-pink-400"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
				text="Sass"
				usage={TUsage.SOMETIMES}
				level={TLevel.MINIMAL}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-teal-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
				text="Tailwind CSS"
				usage={TUsage.ALWAYS}
				level={TLevel.BASIC}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-yellow-400"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				text="Javascript"
				usage={TUsage.SOMETIMES}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-blue-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
				text="Typescript"
				usage={TUsage.ALWAYS}
				level={TLevel.COMPETENT}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				class="bg-orange-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
				text="Svelte"
				usage={TUsage.ALWAYS}
				level={TLevel.COMPETENT}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-orange-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
				text="SvelteKit"
				usage={TUsage.ALWAYS}
				level={TLevel.BASIC}
				date={new Date("September 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-green-600 md:col-span-2"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
				text="NodeJS"
				usage={TUsage.ALWAYS}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title="Desktop" faIcon={faComputer}>
			<KnowledgeItem
				class="bg-orange-400"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
				text="Java"
				usage={TUsage.RARELY}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-fuchsia-900"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
				text="C#"
				usage={TUsage.SOMETIMES}
				level={TLevel.BASIC}
				date={new Date("December 4, 2022")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title="Databases" faIcon={faDatabase}>
			<KnowledgeItem
				class="bg-blue-400 md:col-span-2"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
				text="MySQL"
				usage={TUsage.SOMETIMES}
				level={TLevel.COMPETENT}
				date={new Date("2021")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title="Tools" faIcon={faTools}>
			<KnowledgeItem
				class="bg-sky-700"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
				text="VSCode"
				usage={TUsage.ALWAYS}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-amber-500"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
				text="Git"
				usage={TUsage.ALWAYS}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-gray-700"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
				text="Github"
				usage={TUsage.ALWAYS}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-slate-900"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
				text="Linux"
				usage={TUsage.ALWAYS}
				level={TLevel.COMPETENT}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				class="bg-red-400 md:col-span-2"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
				text="NPM"
				usage={TUsage.SOMETIMES}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
		</KnowledgeGroup>
	</div>
</section>
<section id="projects" class="pb-16">
	<h2 class="pb-14 text-center">Current Projects</h2>
	<div>
		<Project
			image="https://raw.githubusercontent.com/thejaviertc/thejaviertc/master/images/steam-workshop-stats.png"
			name="Steam Workshop Stats"
			description="See the views, subscriptions and favs of your Steam
			Workshop addons!"
			live="https://thejaviertc.github.io/steam-workshop-stats/"
			github="https://github.com/thejaviertc/steam-workshop-stats"
		>
			<Badge
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
			/>
			<Badge
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
			/>
			<Badge
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
			/>
			<Badge
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
			/>
			<Badge
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
			/>
		</Project>
	</div>
</section>
