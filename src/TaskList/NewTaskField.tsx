import { createSignal } from "solid-js";

import { invoke } from "@tauri-apps/api/tauri";

import { useTaskList } from "../contexts/TaskListContext";

function NewTaskField() {
  const [taskToAdd, setTaskToAdd] = createSignal("");
  const [taskList, { refreshTaskList }] = useTaskList();

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    await invoke("add_new_task", { taskToAdd: { contents: taskToAdd() } });
    setTaskToAdd("");
    // TODO: This is probaly very bad, look further to understand a proper solution
    refreshTaskList(await invoke("get_tasks"));
  }
  return (
    <div class="mb-4">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add an item in..."
          required
          value={taskToAdd()}
          onInput={(e) => setTaskToAdd(e.currentTarget.value)}
          class="form-control"
        ></input>
      </form>
    </div>
  );
}

export default NewTaskField;
