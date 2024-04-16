/*
KaiDo: A simple local to-do list application
Copyright 2024 alxwnth <https://www.alxwnth.com/>
SPDX-License-Identifier: AGPL-3.0-or-later
*/

import { invoke } from '@tauri-apps/api/core';

import type { IStorageDriver } from './IStorageDriver';

import type Task from './models/Task';
import type List from './models/List';

export const StorageDriver: IStorageDriver = {
	getLists: async function (): Promise<List[]> {
		return await invoke('get_lists');
	},
	listTasks: async function (listId?: number): Promise<Task[]> {
		throw new Error('Function not implemented.');
		// const tasks = await invoke('get_tasks');
	},
	getTask: function (todoId: number): Promise<Task> {
		throw new Error('Function not implemented.');
	},
	createTask: function (task: Task): Promise<void> {
		throw new Error('Function not implemented.');
	},
	updateTask: function (task: Task): Promise<void> {
		throw new Error('Function not implemented.');
	},
	deleteTask: function (taskId: number): Promise<void> {
		throw new Error('Function not implemented.');
	}
};
