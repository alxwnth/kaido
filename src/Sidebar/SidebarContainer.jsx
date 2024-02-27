import NewListButton from "./ProjectList/NewListButton";
import ProjectList from "./ProjectList/ProjectList";

import "./SidebarContainer.scss";

function SidebarContainer() {
  return (
    <div class="sidebar-container">
      <ProjectList />
      <NewListButton/>
    </div>
  );
}

export default SidebarContainer;
