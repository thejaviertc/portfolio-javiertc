<script>
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import Button from "$components/Button.svelte";
	import { faBackward } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<section class="min-h-screen flex flex-col justify-center items-center text-center">
	<h2 class="mb-6">Something Happened - {$page.status}</h2>
	<Button class="btn-accent" faIcon={faBackward} link={base}>Return Back</Button>
</section>
