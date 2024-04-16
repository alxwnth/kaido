use crate::models::list::List;
use crate::services::list_service;

#[tauri::command]
pub fn get_lists() -> Vec<List> {
    list_service::get_lists()
}
