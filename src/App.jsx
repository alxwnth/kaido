import SidebarContainer from "./Sidebar/SidebarContainer";
import NewTaskField from "./TaskList/NewTaskField";
import TaskList from "./TaskList/TaskList";
import { TaskListProvider } from "./contexts/TaskListContext";

function App() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-3">
          <SidebarContainer />
        </div>
        <div class="col-5">
          <TaskListProvider>
            <NewTaskField />
            <TaskList />
          </TaskListProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
