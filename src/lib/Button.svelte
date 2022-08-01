<script lang="ts">
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

	import Fa from "svelte-fa";

	export let faIcon: IconDefinition;
	export let link: string;
	export let text: string;
</script>

<a
	class="bg-blue-400 hover:bg-blue-600 px-4 py-2 mx-2 text-white rounded-xl"
	href={link}
	role="button"
>
	<Fa icon={faIcon} />
	{text}
</a>
