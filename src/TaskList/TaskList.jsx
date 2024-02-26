import { invoke } from "@tauri-apps/api";
import { For, createSignal, onMount } from "solid-js";

function TaskList() {
  const [taskList, setTaskList] = createSignal();

  onMount(async () => {
    console.log("retrieving tasks");
    console.log(await invoke("get_tasks"));
    setTaskList(await invoke("get_tasks"));
    console.log(taskList());
  });

  return (
    <div>
      {JSON.stringify(taskList())}
      <For each={taskList()}>
        {(item, index) => (
          <li>
            {item} - {index()}
          </li>
        )}
      </For>
    </div>
  );
}

export default TaskList;
