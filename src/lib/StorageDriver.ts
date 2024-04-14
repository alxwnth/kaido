/*
KaiDo: A simple local to-do list application
Copyright 2024 alxwnth <https://www.alxwnth.com/>
SPDX-License-Identifier: AGPL-3.0-or-later
*/

import type { IStorageDriver } from './IStorageDriver';
import type Task from './models/Task';

export const StorageDriver: IStorageDriver = {
	listTasks: function (listId: number): Promise<Task[]> {
		throw new Error('Function not implemented.');
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
