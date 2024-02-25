import SidebarContainer from "./Sidebar/SidebarContainer";
import NewTaskField from "./TaskList/NewTaskField";
import TaskList from "./TaskList/TaskList";

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <SidebarContainer />
        </div>
        <div class="col-5">
          <NewTaskField />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
