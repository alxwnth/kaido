<script lang="ts">
	import { DatabaseManager } from '$lib/DbManager';

	let taskText = $state('');

	async function addTask(event: Event) {
		event.preventDefault();
		(await DatabaseManager.getInstance()).addTask(taskText);
		taskText = '';
	}
</script>

<form onsubmit={addTask}>
	<input class="new-task" bind:value={taskText} /><button type="submit">add</button>
</form>

<style>
	.new-task {
		width: 100%;
	}
</style>
