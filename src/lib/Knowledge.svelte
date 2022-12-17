<script lang="ts">
	export let title: string;
	export let image: string;
	export let usage: string;
	export let level: string;
	export let date: Date;

	/**
	 * Converts a Date object into a string with friendly format
	 * @param date Date
	 */
	function obtainAmountTime(date: Date): string {
		const actualDate = new Date(Date.now());

		// Get the amout of years since the date
		const years = actualDate.getFullYear() - date.getFullYear();

		if (years > 0) return `+${years} year/s`;

		// Get the amout of months since the date
		const months = actualDate.getMonth() - date.getMonth();

		if (months > 1) return `${months} months`;

		return "Just Starting";
	}
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
		<h5 class="py-3">{level} ({obtainAmountTime(date)})</h5>
	</div>
</div>
