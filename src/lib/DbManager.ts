/*
KaiDo
Copyright (C) 2024 alxwnth.

PokeBook is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

PokeBook is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

import Database from '@tauri-apps/plugin-sql';

export interface Task {
	id?: number;
	listId: number;
	isDone: boolean;
	contents: string;
	createdAt: Date;
	dueAt?: Date;
	remindAt?: Date;
	isStarred?: boolean;
	note?: string;
}

export class DatabaseManager {
	private static instance: DatabaseManager | null = null;
	private db: Database | null = null;

	private constructor() {}

	static async getInstance(): Promise<DatabaseManager> {
		if (!DatabaseManager.instance) {
			DatabaseManager.instance = new DatabaseManager();
			await DatabaseManager.instance.initDB();
		}
		return DatabaseManager.instance;
	}

	private async initDB(): Promise<void> {
		this.db = await Database.load('sqlite:kaido.db');
	}

	public async addTask(contents: string, listId: number = 1) {
		if (!this.db) throw new Error('Database not initialized');
		await this.db.execute('INSERT INTO tasks (list_id, contents) VALUES (?, ?)', [
			listId,
			contents
		]);
	}
}
