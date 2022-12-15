<script>
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<h1 class="text-center">{$page.status}</h1>
