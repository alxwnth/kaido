use crate::models::{new_task::NewTask, task::Task};
use crate::services::task_service;

static INBOX_LIST_ID: i32 = 1;

#[tauri::command]
pub fn add_new_task(task_to_add: NewTask) {
    task_service::add_task(&task_to_add);
}

#[tauri::command]
pub fn get_tasks(list_id: Option<i32>) -> Vec<Task> {
    task_service::get_tasks(list_id.unwrap_or(INBOX_LIST_ID)).unwrap()
}

#[tauri::command]
pub fn get_task(task_id: i32) -> Option<Task> {
    task_service::get_task(&task_id)
}

#[tauri::command]
pub fn toggle_task(task_id: i32) {
    task_service::toggle_task(task_id);
}
