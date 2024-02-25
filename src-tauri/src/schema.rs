// @generated automatically by Diesel CLI.

diesel::table! {
    annotation (id) {
        id -> Integer,
        task_id -> Nullable<Integer>,
        contents -> Text,
        attachment_url -> Nullable<Text>,
        created -> Timestamp,
    }
}

diesel::table! {
    list (id) {
        id -> Integer,
        name -> Text,
    }
}

diesel::table! {
    subtask (id) {
        id -> Integer,
        task_id -> Nullable<Integer>,
        contents -> Text,
    }
}

diesel::table! {
    task (id) {
        id -> Integer,
        list_id -> Nullable<Integer>,
        done -> Bool,
        contents -> Text,
        created -> Timestamp,
        due -> Nullable<Timestamp>,
        remind_at -> Nullable<Timestamp>,
        starred -> Bool,
        note -> Nullable<Text>,
    }
}

diesel::joinable!(annotation -> task (task_id));
diesel::joinable!(subtask -> task (task_id));
diesel::joinable!(task -> list (list_id));

diesel::allow_tables_to_appear_in_same_query!(
    annotation,
    list,
    subtask,
    task,
);
