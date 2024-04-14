use crate::models::{new_task::NewTask, task::Task};
use crate::services::task_service;

#[tauri::command]
pub fn add_new_task(task_to_add: NewTask) {
    task_service::add_task(&task_to_add);
}

#[tauri::command]
pub fn get_tasks() -> Vec<Task> {
    task_service::get_tasks()
}

#[tauri::command]
pub fn get_task(task_id: i32) -> Option<Task> {
    task_service::get_task(&task_id)
}
