<script lang="ts">
	import Badge from "$components/Badge.svelte";
	import Button from "$components/Button.svelte";
	import KnowledgeGroup from "$components/KnowledgeGroup.svelte";
	import KnowledgeItem from "$components/KnowledgeItem.svelte";
	import Project from "$components/Project.svelte";

	import TLevel from "$lib/TLevel";
	import TUsage from "$lib/TUsage";

	import aspnetLogo from "$lib/assets/knowledge/aspnet.svg";
	import bootstrapLogo from "$lib/assets/knowledge/bootstrap.svg";
	import csharpLogo from "$lib/assets/knowledge/csharp.svg";
	import cssLogo from "$lib/assets/knowledge/css.svg";
	import expressjsLogo from "$lib/assets/knowledge/expressjs.svg";
	import filezillaLogo from "$lib/assets/knowledge/filezilla.svg";
	import gitLogo from "$lib/assets/knowledge/git.svg";
	import githubLogo from "$lib/assets/knowledge/github.svg";
	import htmlLogo from "$lib/assets/knowledge/html.svg";
	import javaLogo from "$lib/assets/knowledge/java.svg";
	import javascriptLogo from "$lib/assets/knowledge/javascript.svg";
	import jenkinsLogo from "$lib/assets/knowledge/jenkins.svg";
	import linuxLogo from "$lib/assets/knowledge/linux.svg";
	import mysqlLogo from "$lib/assets/knowledge/mysql.svg";
	import nodejsLogo from "$lib/assets/knowledge/nodejs.svg";
	import sassLogo from "$lib/assets/knowledge/sass.svg";
	import sonarcloudLogo from "$lib/assets/knowledge/sonarcloud.svg";
	import sqlLogo from "$lib/assets/knowledge/sql.svg";
	import svelteLogo from "$lib/assets/knowledge/svelte.svg";
	import tailwindLogo from "$lib/assets/knowledge/tailwind.svg";
	import trelloLogo from "$lib/assets/knowledge/trello.svg";
	import typescriptLogo from "$lib/assets/knowledge/typescript.svg";
	import vitestLogo from "$lib/assets/knowledge/vitest.svg";
	import vscodeLogo from "$lib/assets/knowledge/vscode.svg";

	import steamWorkshopStatsBanner from "$lib/assets/projects/steam-workshop-stats.jpg";

	import { faGithub, faSteam } from "@fortawesome/free-brands-svg-icons";
	import {
		faAngleDown,
		faCode,
		faDatabase,
		faDisplay,
		faServer,
		faTools,
	} from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>{$_("title")}</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h1 class="px-6">Javiertc <Fa icon={faCode} /></h1>
	<h2 class="my-4 px-6">{$_("description")}</h2>
	<div class="my-6">
		<Button class="btn-accent" faIcon={faGithub} link="https://github.com/thejaviertc">
			Github
		</Button>
		<Button class="btn-accent" faIcon={faSteam} link="https://steamcommunity.com/id/javiertc/">
			Steam
		</Button>
	</div>
	<Button class="btn-accent" faIcon={faAngleDown} link="#knowledge">
		{$_("actions.moreInfo")}
	</Button>
</section>
<div class="divider divider-secondary" />
<section id="knowledge" class="pt-20 mb-10 mx-5 sm:mx-10">
	<h2 class="mb-10 text-center">{$_("misc.knowledge")}</h2>
	<div class="flex flex-wrap gap-8 justify-center">
		<KnowledgeGroup title={$_("knowledge.programmingLanguages")} faIcon={faCode}>
			<KnowledgeItem
				color="bg-yellow-500"
				logo={javascriptLogo}
				text="Javascript"
				usage={TUsage.RARELY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				color="bg-blue-600"
				logo={typescriptLogo}
				text="Typescript"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				color="bg-orange-500"
				logo={javaLogo}
				text="Java"
				usage={TUsage.RARELY}
				level={TLevel.BASIC}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				color="bg-purple-700"
				logo={csharpLogo}
				text="C#"
				usage={TUsage.RECURRENTLY}
				level={TLevel.BASIC}
				date={new Date("November 1, 2023")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title={$_("knowledge.frontend")} faIcon={faDisplay}>
			<KnowledgeItem
				color="bg-orange-600"
				logo={htmlLogo}
				text="HTML"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2019")}
			/>
			<KnowledgeItem
				color="bg-sky-600"
				logo={cssLogo}
				text="CSS"
				usage={TUsage.RARELY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2019")}
			/>
			<KnowledgeItem
				color="bg-pink-400"
				logo={sassLogo}
				text="Sass"
				usage={TUsage.SOMETIMES}
				level={TLevel.BASIC}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				color="bg-teal-600"
				logo={tailwindLogo}
				text="Tailwind"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				color="bg-violet-700"
				logo={bootstrapLogo}
				text="Bootstrap"
				usage={TUsage.RARELY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2019")}
			/>
			<KnowledgeItem
				color="bg-orange-600"
				logo={svelteLogo}
				text="Svelte"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("August 1, 2022")}
			/>
			<KnowledgeItem
				color="bg-orange-600"
				logo={svelteLogo}
				text="SvelteKit"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("September 1, 2022")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title={$_("knowledge.backend")} faIcon={faServer}>
			<KnowledgeItem
				color="bg-green-700"
				logo={nodejsLogo}
				text="NodeJS"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				color="bg-yellow-500"
				logo={expressjsLogo}
				text="ExpressJS"
				usage={TUsage.SOMETIMES}
				level={TLevel.INTERMEDIATE}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				color="bg-purple-700"
				logo={aspnetLogo}
				text="ASP.NET Core"
				usage={TUsage.RECURRENTLY}
				level={TLevel.BASIC}
				date={new Date("November 1, 2023")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title={$_("knowledge.databases")} faIcon={faDatabase}>
			<KnowledgeItem
				color="bg-blue-400"
				logo={sqlLogo}
				text="SQL"
				usage={TUsage.SOMETIMES}
				level={TLevel.INTERMEDIATE}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				color="bg-blue-400"
				logo={mysqlLogo}
				text="MySQL"
				usage={TUsage.SOMETIMES}
				level={TLevel.INTERMEDIATE}
				date={new Date("2021")}
			/>
		</KnowledgeGroup>
		<KnowledgeGroup title={$_("knowledge.tools")} faIcon={faTools}>
			<KnowledgeItem
				color="bg-sky-600"
				logo={vscodeLogo}
				text="VSCode"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2019")}
			/>
			<KnowledgeItem
				color="bg-amber-500"
				logo={gitLogo}
				text="Git"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2022")}
			/>
			<KnowledgeItem
				color="bg-gray-800"
				logo={githubLogo}
				text="Github"
				usage={TUsage.RECURRENTLY}
				level={TLevel.ADVANCED}
				date={new Date("2020")}
			/>
			<KnowledgeItem
				color="bg-slate-900"
				logo={linuxLogo}
				text="Linux"
				usage={TUsage.RECURRENTLY}
				level={TLevel.INTERMEDIATE}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				color="bg-blue-400"
				logo={mysqlLogo}
				text="MySQL Workbench"
				usage={TUsage.SOMETIMES}
				level={TLevel.INTERMEDIATE}
				date={new Date("2021")}
			/>
			<KnowledgeItem
				color="bg-green-700"
				logo={vitestLogo}
				text="Vitest"
				usage={TUsage.RECURRENTLY}
				level={TLevel.BASIC}
				date={new Date("May 1, 2023")}
			/>
			<KnowledgeItem
				color="bg-slate-900"
				logo={jenkinsLogo}
				text="Jenkins"
				usage={TUsage.RARELY}
				level={TLevel.MINIMAL}
				date={new Date("May 1, 2023")}
			/>
			<KnowledgeItem
				color="bg-amber-500"
				logo={sonarcloudLogo}
				text="SonarCloud"
				usage={TUsage.RECURRENTLY}
				level={TLevel.BASIC}
				date={new Date("May 1, 2023")}
			/>
			<KnowledgeItem
				color="bg-red-700"
				logo={filezillaLogo}
				text="Filezilla"
				usage={TUsage.SOMETIMES}
				level={TLevel.INTERMEDIATE}
				date={new Date("2019")}
			/>
			<KnowledgeItem
				color="bg-blue-600"
				logo={trelloLogo}
				text="Trello"
				usage={TUsage.RARELY}
				level={TLevel.ADVANCED}
				date={new Date("2019")}
			/>
		</KnowledgeGroup>
	</div>
</section>
<section id="projects" class="mb-10">
	<h2 class="mb-10 text-center">{$_("misc.currentProjects")}</h2>
	<div>
		<Project
			image={steamWorkshopStatsBanner}
			name={$_("projects.steamWorkshopStats.title")}
			description={$_("projects.steamWorkshopStats.description")}
			live="https://thejaviertc.github.io/steam-workshop-stats/"
			github="https://github.com/thejaviertc/steam-workshop-stats"
		>
			<Badge logo={htmlLogo} />
			<Badge logo={sassLogo} />
			<Badge logo={tailwindLogo} />
			<Badge logo={typescriptLogo} />
			<Badge logo={svelteLogo} />
			<Badge logo={nodejsLogo} />
		</Project>
	</div>
</section>
