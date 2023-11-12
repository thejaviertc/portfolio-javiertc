<script lang="ts">
	export let logo: string;
	export let text: string;
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
		const years = new Date(+new Date() - +date).getFullYear() - 1970;

		if (years > 0) return `+${years} year/s`;

		// Get the amout of months since the date
		const months = calculateNumberMonths(date, actualDate);

		if (months > 1) return `${months} months`;

		return "Just Starting";
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

<div class="{$$props.class} p-4 flex flex-auto justify-center items-center rounded-lg shadow-md">
	<img src={logo} class="h-16" alt="Logo" />
	<h5 class="mx-12 text-center">{text}</h5>
	<div class="text-right">
		<h5>Usage: {usage}</h5>
		<h5>Knowledge: {level}</h5>
		<h5>Started Using It: {obtainAmountTime(date)}</h5>
	</div>
</div>
