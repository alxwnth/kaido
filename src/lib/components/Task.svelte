<script lang="ts">
	import { Checkbox } from 'flowbite-svelte';
	import { StorageDriver } from '../StorageDriver';

	export let contents: string;
	export let done: boolean;
	export let taskId: number;

	async function toggleTask() {
		StorageDriver.toggleTask(taskId);
	}
</script>

<div class="flex items-center p-2">
	<Checkbox class="p-2" on:change={toggleTask} checked={done} />
	<span class={done ? 'line-through' : ''}>{contents}</span>
</div>
