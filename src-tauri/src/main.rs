// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

mod commands;
mod db;
mod models;
mod schema;
mod services;

use commands::list_commands::*;
use commands::task_commands::*;

fn main() {
    tauri::Builder::default()
        .setup(|_app| {
            db::init();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            greet,
            add_new_task,
            get_tasks,
            get_task,
            get_lists,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
