<script lang="ts">
	import Badge from "$components/Badge.svelte";
	import Button from "$components/Button.svelte";
	import KnowledgeGroup from "$components/KnowledgeGroup.svelte";
	import KnowledgeItem from "$components/KnowledgeItem.svelte";
	import Project from "$components/Project.svelte";
	import TLevel from "$lib/TLevel";
	import TUsage from "$lib/TUsage";
	import { faGithub, faSteam } from "@fortawesome/free-brands-svg-icons";
	import {
		faAngleDown,
		faCode,
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
<section id="knowledge" class="py-20">
	<h2 class="pb-14 text-center">Knowledge</h2>
	<div class="grid grid-cols-1 xl:grid-cols-2 gap-10 mx-5 sm:mx-10">
		<KnowledgeGroup title="Web Development" faIcon={faWindowMaximize}>
			<KnowledgeItem
				class="bg-orange-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
				text="HTML"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-sky-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
				text="CSS"
				usage={TUsage.RARELY}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-pink-400"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
				text="Sass"
				usage={TUsage.SOMETIMES}
				level={TLevel.BASIC}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-teal-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
				text="Tailwind CSS"
				usage={TUsage.RECURRENTLY}
				level={TLevel.BASIC}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-yellow-400"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				text="Javascript"
				usage={TUsage.SOMETIMES}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-blue-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
				text="Typescript"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				class="bg-orange-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
				text="Svelte"
				usage={TUsage.RECURRENTLY}
				level={TLevel.COMPETENT}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-orange-600"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
				text="SvelteKit"
				usage={TUsage.RECURRENTLY}
				level={TLevel.BASIC}
				date={new Date("September 1, 2022")}
			/>
			<KnowledgeItem
				class="bg-green-600 md:col-span-2"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
				text="NodeJS"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title="Tools" faIcon={faTools}>
			<KnowledgeItem
				class="bg-sky-700"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
				text="VSCode"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-amber-500"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
				text="Git"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-gray-700"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
				text="Github"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				class="bg-slate-900"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
				text="Linux"
				usage={TUsage.RECURRENTLY}
				level={TLevel.COMPETENT}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				class="bg-red-400 md:col-span-2"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
				text="NPM"
				usage={TUsage.RECURRENTLY}
				level={TLevel.COMPETENT}
				date={new Date("2020")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup class="md:col-span-2" title="Databases" faIcon={faDatabase}>
			<KnowledgeItem
				class="bg-blue-400 md:col-span-2"
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
				text="MySQL"
				usage={TUsage.SOMETIMES}
				level={TLevel.COMPETENT}
				date={new Date("2021")}
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
			description="See the number of views, subs, likes and more of your addons!"
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
			<Badge
				logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
			/>
		</Project>
	</div>
</section>
