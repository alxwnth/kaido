import { invoke } from "@tauri-apps/api/tauri";

function NewTaskField() {
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(
      await invoke("add_new_task", { taskToAdd: { contents: "test" } })
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        class="form-control"
        placeholder="Add an item in..."
      ></input>
    </form>
  );
}

export default NewTaskField;
