use tauri_plugin_sql::{Migration, MigrationKind};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migrations = vec![
        Migration {
            version: 1,
            description: "create_lists_table",
            sql: "CREATE TABLE IF NOT EXISTS lists (id INTEGER NOT NULL PRIMARY KEY, name VARCHAR NOT NULL); INSERT INTO lists (name) SELECT 'Inbox' WHERE NOT EXISTS (SELECT 1 FROM lists WHERE name = 'Inbox');",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 2,
            description: "create_tasks_table",
            sql: "CREATE TABLE IF NOT EXISTS tasks (id INTEGER NOT NULL PRIMARY KEY, list_id INTEGER NOT NULL DEFAULT 1 REFERENCES lists(id) ON UPDATE CASCADE, done BOOLEAN NOT NULL DEFAULT FALSE, contents VARCHAR NOT NULL, created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, due TIMESTAMP, remind_at TIMESTAMP, starred BOOLEAN NOT NULL DEFAULT FALSE, note TEXT);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 3,
            description: "create_annotations_table",
            sql: "CREATE TABLE IF NOT EXISTS annotations (id INTEGER NOT NULL PRIMARY KEY, task_id INTEGER NOT NULL REFERENCES tasks(id) ON UPDATE CASCADE, contents TEXT NOT NULL, attachment_url VARCHAR, created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);",
            kind: MigrationKind::Up,
        },
        Migration {
            version: 4,
            description: "create_subtasks_table",
            sql: "CREATE TABLE IF NOT EXISTS subtasks (id INTEGER NOT NULL PRIMARY KEY, task_id INTEGER NOT NULL REFERENCES tasks(id) ON UPDATE CASCADE, contents VARCHAR NOT NULL);",
            kind: MigrationKind::Up,
        }
    ];

    tauri::Builder::default()
        .plugin(
            tauri_plugin_sql::Builder::new()
        .add_migrations("sqlite:kaido.db", migrations)
        .build()
        )
        .plugin(tauri_plugin_shell::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
