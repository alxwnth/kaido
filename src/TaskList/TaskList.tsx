import { invoke } from "@tauri-apps/api";
import { For, onMount } from "solid-js";

import { useTaskList } from "../contexts/TaskListContext";

import Task from "./Task";

function TaskList() {
  const [taskList, { refreshTaskList }] = useTaskList();

  onMount(async () => {
    refreshTaskList(await invoke("get_tasks"));
  });

  return (
    <div class="list-group">
      <For each={taskList}>{(task) => <Task done={task.done} contents={task.contents} starred={task.starred} />}</For>
    </div>
  );
}

export default TaskList;
