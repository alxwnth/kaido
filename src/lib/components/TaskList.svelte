<script lang="ts">
	import { onMount } from 'svelte';

	import { invoke } from '@tauri-apps/api/core';

	import Task from './Task.svelte';

	let tasks: Task[];

	onMount(async () => {
		tasks = await invoke('get_tasks', {});
	});
</script>

{#if tasks}
	<ul
		class="w-full bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600 divide-y divide-gray-200 dark:divide-gray-600"
	>
		{#each tasks as task}
			<li><Task contents={task.contents} /></li>
		{/each}
	</ul>
{/if}
