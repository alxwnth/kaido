use chrono::NaiveDateTime;
use diesel::{
    associations::{Associations, Identifiable},
    Queryable, Selectable,
};
use serde::Serialize;

#[derive(Queryable, Selectable, Identifiable, Associations, Debug, PartialEq, Serialize)]
#[diesel(belongs_to(crate::models::list::List))]
#[diesel(table_name = crate::schema::task)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct Task {
    pub id: i32,
    pub list_id: i32,
    pub done: bool,
    pub contents: String,
    pub created: NaiveDateTime,
    pub due: Option<NaiveDateTime>,
    pub remind_at: Option<NaiveDateTime>,
    pub starred: bool,
    pub note: Option<String>,
}
