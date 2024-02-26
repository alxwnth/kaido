use chrono::NaiveDateTime;
use diesel::Insertable;
use serde::{Serialize, Deserialize};

#[derive(Insertable)]
#[derive(Serialize, Deserialize)]
#[diesel(table_name = crate::schema::task)]
pub struct NewTask {
    pub list_id: Option<i32>,
    pub contents: String,
    pub due: Option<NaiveDateTime>,
    pub remind_at: Option<NaiveDateTime>,
    pub starred: Option<bool>,
    pub note: Option<String>,
}