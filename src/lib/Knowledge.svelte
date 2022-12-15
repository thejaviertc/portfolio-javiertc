<script lang="ts">
	export let title: string;
	export let image: string;
	export let usage: string;
	export let level: string;
	export let time: string;
</script>

<div
	class="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg dark:border-4 dark:border-zinc-800"
>
	<img src={image} alt="logo" class="mx-auto w-24 h-20" />
	<div
		class="pt-4 text-center divide-y-4 divide-rose-50 dark:divide-zinc-800"
	>
		<h4 class="pb-3">{title}</h4>
		<h5 class="py-3">{usage}</h5>
		<h5 class="py-3">{level} ({time})</h5>
	</div>
</div>
