import NewListButton from "./ProjectList/NewListButton";
import ProjectList from "./ProjectList/ProjectList";

function SidebarContainer() {
  return (
    <div class="uk-background-muted">
      <ProjectList />
      <NewListButton/>
    </div>
  );
}

export default SidebarContainer;
