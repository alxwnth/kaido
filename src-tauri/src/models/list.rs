use diesel::{associations::Identifiable, Queryable, Selectable};
use serde::Serialize;

#[derive(Queryable, Selectable, Serialize, Identifiable, PartialEq, Debug)]
#[diesel(table_name = crate::schema::list)]
#[diesel(check_for_backend(diesel::sqlite::Sqlite))]
pub struct List {
    pub id: i32,
    pub name: String,
}
