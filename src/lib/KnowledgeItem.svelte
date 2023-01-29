<script lang="ts">
	export let color: string;
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
		return months <= 0 ? 0 : months;
	}
</script>

<span class="{color} px-4 py-2 mx-2 my-2 rounded-md flex items-center">
	<img src={logo} class="h-10 sm:h-14" alt="Logo" />
	<div class="mx-1 sm:mx-4">
		<h5>{text}</h5>
	</div>
	<div class="text-right">
		<h5>{usage}</h5>
		<h5>{level}</h5>
		<h5>({obtainAmountTime(date)})</h5>
	</div>
</span>
