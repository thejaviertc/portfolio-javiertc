<script>
	import Button from "$components/Button.svelte";

	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { faBackward } from "@fortawesome/free-solid-svg-icons";
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h2 class="mb-6">{$_("error.unknown", { values: { status: $page.status } })}</h2>
	<Button class="btn-accent" faIcon={faBackward} link="{base}/">
		{$_("actions.returnBack")}
	</Button>
</section>
