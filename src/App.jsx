import SidebarContainer from "./Sidebar/SidebarContainer";
import NewTaskField from "./TaskList/NewTaskField";
import TaskList from "./TaskList/TaskList";

function App() {
  return (
    <div class="uk-grid">
      <div class="uk-width-1-4">
      <SidebarContainer />
      </div>
      <div class="uk-grid-expand">
        <NewTaskField />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
