use crate::db::establish_db_connection;
use crate::models::{list::List, new_task::NewTask, task::Task};
use crate::schema::task::done;
use crate::schema::{list, task};
use diesel::dsl::not;
use diesel::prelude::*;
use diesel::result::Error;

pub fn add_task(task_to_add: &NewTask) {
    let connection = &mut establish_db_connection();

    diesel::insert_into(task::table)
        .values(task_to_add)
        .execute(connection)
        .expect("Could not add new task");
}

// TODO: To keep in mind, maybe it's best to have all functions return Result and do proper error handling
pub fn get_tasks(current_list_id: i32) -> Result<Vec<Task>, Error> {
    let connection = &mut establish_db_connection();

    let current_list = list::table
        .find(&current_list_id)
        .select(List::as_select())
        .get_result(connection)?;

    let tasks = Task::belonging_to(&current_list)
        .select(Task::as_select())
        .load(connection)?;

    Ok(tasks)
}

pub fn get_task(task_id: &i32) -> Option<Task> {
    use crate::schema::task::dsl::{id, task};

    let connection = &mut establish_db_connection();

    task.filter(id.eq(task_id)).first::<Task>(connection).ok()
}

pub fn toggle_task(task_id: i32) {
    let connection = &mut establish_db_connection();

    diesel::update(task::table.find(&task_id))
        .set(done.eq(not(done)))
        .execute(connection)
        .ok();
}
