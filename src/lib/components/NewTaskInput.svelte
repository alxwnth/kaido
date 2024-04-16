<script lang="ts">
	import { invoke } from '@tauri-apps/api/core';

	import { Input } from 'flowbite-svelte';

	let newTaskText = '';

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		await invoke('add_new_task', { taskToAdd: { contents: newTaskText } });
		newTaskText = '';
	}
</script>

<div class="">
	<form on:submit={handleSubmit}>
		<Input
			type="text"
			id="new_task"
			placeholder="Add an item in..."
			required
			bind:value={newTaskText}
		/>
	</form>
</div>
