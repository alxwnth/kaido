use crate::schema::task;
use crate::schema::task::dsl;
use crate::{db::establish_db_connection, models::{new_task::NewTask,task::Task}};
use diesel::prelude::*;

pub fn add_task(task_to_add: &NewTask) {
    let connection = &mut establish_db_connection();

    diesel::insert_into(task::table)
        .values(task_to_add)
        .execute(connection)
        .expect("Could not add new task");
}
// TODO: This will need a "list" argument and other optional args for running search queries
pub fn get_tasks() -> Vec<Task> {
    let connection = &mut establish_db_connection();

    dsl::task
        .load::<Task>(connection)
        .expect("Could not get tasks")
}
