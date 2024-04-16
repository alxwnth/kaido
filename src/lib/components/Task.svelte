<script lang="ts">
	import { Checkbox } from 'flowbite-svelte';

	export let contents: string;
</script>

<div class="flex items-center p-2">
	<Checkbox class="p-2" />
	{contents}
</div>
