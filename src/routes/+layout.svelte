<script lang="ts">
	import "../app.css";
	import "../i18n";

	import { base } from "$app/paths";
	import Button from "$components/Button.svelte";
	import LanguageSelector from "$components/LanguageSelector.svelte";
	import {
		faBars,
		faBookAtlas,
		faDiagramProject,
		faUserAlt,
	} from "@fortawesome/free-solid-svg-icons";
	import { onMount } from "svelte";
	import Fa from "svelte-fa";
	import { _ } from "svelte-i18n";

	let navbarColor: string = "secondary";

	onMount(() => {
		window.onscroll = () => {
			navbarColor =
				document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100
					? "primary"
					: "secondary";
		};
	});
</script>

<nav class="navbar bg-{navbarColor} fixed">
	<div class="navbar-start">
		<div class="dropdown">
			<button tabindex="-1" class="btn btn-ghost lg:hidden">
				<Fa icon={faBars} />
			</button>
			<ul
				tabindex="-1"
				class="menu menu-sm dropdown-content mt-4 ml-2 p-2 shadow-sm bg-secondary rounded-box w-64"
			>
				<Button class="btn-ghost" faIcon={faBookAtlas} link="#knowledge">
					{$_("misc.knowledge")}
				</Button>
				<Button class="btn-ghost" faIcon={faDiagramProject} link="#projects">
					{$_("misc.projects")}
				</Button>
				<LanguageSelector />
			</ul>
		</div>
		<Button class="btn-ghost ml-0" faIcon={faUserAlt} link="{base}/">{$_("title")}</Button>
	</div>
	<div class="navbar-end hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<Button class="btn-ghost" faIcon={faBookAtlas} link="#knowledge">
				{$_("misc.knowledge")}
			</Button>
			<Button class="btn-ghost" faIcon={faDiagramProject} link="#projects">
				{$_("misc.projects")}
			</Button>
			<LanguageSelector />
		</ul>
	</div>
</nav>
<slot />
