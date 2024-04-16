use crate::schema::list::dsl;

use crate::{db::establish_db_connection, models::list::List};
use diesel::prelude::*;

pub fn get_lists() -> Vec<List> {
    let connection = &mut establish_db_connection();

    dsl::list
        .load::<List>(connection)
        .expect("Could not get lists")
}
