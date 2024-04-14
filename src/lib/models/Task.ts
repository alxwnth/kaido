/*
KaiDo: A simple local to-do list application
Copyright 2024 alxwnth <https://www.alxwnth.com/>
SPDX-License-Identifier: AGPL-3.0-or-later
*/

export default interface Task {
	id: number;
	listId?: number;
	done: boolean;
	contents: string;
	created: Date;
	due: Date;
	remindAt: Date;
	starred: boolean;
	note?: string;
}
