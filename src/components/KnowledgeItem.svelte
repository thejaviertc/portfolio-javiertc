<script lang="ts">
	import { _ } from "svelte-i18n";

	export let color: string;
	export let logo: string;
	export let text: string;
	export let usage: string;
	export let level: string;
	export let date: Date;

	/**
	 * Converts a Date object into a string with friendly format
	 * @param date
	 */
	function obtainAmountTime(date: Date): string {
		const actualDate = new Date(Date.now());

		// Get the amout of years since the date
		const years = new Date(+new Date() - +date).getFullYear() - 1970;

		if (years > 0) return `+${years} ${$_("knowledge.year/s")}`;

		// Get the amout of months since the date
		const months = calculateNumberMonths(date, actualDate);

		if (months > 1) return `${months} ${$_("knowledge.months")}`;

		return $_("knowledge.justStarting");
	}

	/**
	 * Returns the number of months between the dates
	 * @param start
	 * @param end
	 */
	function calculateNumberMonths(start: Date, end: Date) {
		let months;
		months = (end.getFullYear() - start.getFullYear()) * 12;
		months -= start.getMonth();
		months += end.getMonth();
		return months;
	}
</script>

<div
	class="{color} p-4 flex flex-auto flex-col sm:flex-row justify-center items-center rounded-lg shadow-md"
>
	<img src={logo} class="w-16 h-16" alt="Logo" />
	<h5 class="mx-12 my-2 sm:my-0 text-center">{text}</h5>
	<div class="text-center sm:text-right">
		<h5>{$_("knowledge.usage", { values: { usage: $_(`knowledge.${usage}`) } })}</h5>
		<h5>{$_("knowledge.level", { values: { level: $_(`knowledge.${level}`) } })}</h5>
		<h5>{$_("knowledge.startedUsingIt", { values: { date: obtainAmountTime(date) } })}</h5>
	</div>
</div>
