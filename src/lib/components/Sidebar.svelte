<!-- 
KaiDo: A simple local to-do list application
Copyright 2024 alxwnth <https://www.alxwnth.com/>
SPDX-License-Identifier: AGPL-3.0-or-later
-->

<script lang="ts">
	import { Button, Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
	import { Inbox, ListChecks, Settings, Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { StorageDriver } from '../StorageDriver';

	import type List from '../models/List';

	let lists: List[];

	const listIcons: Record<number, any> = {
		1: Inbox
	};

	onMount(async () => {
		lists = await StorageDriver.getLists();
	});
</script>

<Sidebar class="h-full">
	<SidebarWrapper class="h-full flex flex-col">
		<div class="flex-grow">
			<SidebarGroup>
				{#if lists}
					{#each lists as list}
						<SidebarItem label={list.name}>
							<svelte:fragment slot="icon">
								<svelte:component
									this={listIcons[list.id] || ListChecks}
									class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
								/>
							</svelte:fragment>
						</SidebarItem>
					{/each}
				{/if}
			</SidebarGroup>
			<SidebarGroup border>
				<SidebarItem label="Settings">
					<svelte:fragment slot="icon">
						<Settings
							class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</div>
		<Button outline color="dark"><Plus />New list</Button>
	</SidebarWrapper>
</Sidebar>
