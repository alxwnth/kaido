use crate::models::{task::Task,new_task::NewTask};
use crate::services::task_service;

#[tauri::command]
pub fn add_new_task(task_to_add: NewTask) {
    task_service::add_task(&task_to_add);
}

#[tauri::command]
pub fn get_tasks() -> Vec<Task> {
    task_service::get_tasks()
}