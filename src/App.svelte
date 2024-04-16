<!-- 
KaiDo: A simple local to-do list application
Copyright 2024 alxwnth <https://www.alxwnth.com/>
SPDX-License-Identifier: AGPL-3.0-or-later
-->

<script lang="ts">
	import NewTaskInput from './lib/components/NewTaskInput.svelte';
	import Sidebar from './lib/components/Sidebar.svelte';
	import TaskList from './lib/components/TaskList.svelte';
</script>

<div class="flex gap-6 h-screen">
	<nav>
		<Sidebar />
	</nav>
	<main class="flex-grow mt-6">
		<div class="flex flex-col gap-6">
			<NewTaskInput />
			<TaskList />
		</div>
	</main>
</div>
