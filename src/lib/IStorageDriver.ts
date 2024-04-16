/*
KaiDo: A simple local to-do list application
Copyright 2024 alxwnth <https://www.alxwnth.com/>
SPDX-License-Identifier: AGPL-3.0-or-later
*/

import type Task from './models/Task';
import type List from './models/List';

export interface IStorageDriver {
	getLists(): Promise<List[]>;
	listTasks(listId?: number): Promise<Task[]>;
	getTask(todoId: number): Promise<Task>;
	createTask(task: Task): Promise<void>;
	updateTask(task: Task): Promise<void>;
	deleteTask(taskId: number): Promise<void>;
}
