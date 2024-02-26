use chrono::NaiveDateTime;
use diesel::{Queryable, Selectable};
use serde::Serialize;

#[derive(Queryable, Selectable)]
#[derive(Serialize)]
#[diesel(table_name = crate::schema::task)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Task {
    pub id: i32,
    pub list_id: Option<i32>,
    pub done: bool,
    pub contents: String,
    pub created: NaiveDateTime,
    pub due: Option<NaiveDateTime>,
    pub remind_at: Option<NaiveDateTime>,
    pub starred: bool,
    pub note: Option<String>,
}
