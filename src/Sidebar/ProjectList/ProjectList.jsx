import { For, createSignal } from "solid-js";

import ProjectListItem from "./ProjectListItem";

import InboxIcon from "../../icons/InboxIcon";

function ProjectList() {
  const [projects, setProjects] = createSignal([
    {
      icon: <InboxIcon />,
      projectName: "Inbox",
      nTasksOverdue: "2",
      nTasks: "3",
    },
    { icon: "ST", projectName: "Starred", nTasksOverdue: "0", nTasks: "2" },
    { icon: "TD", projectName: "Today", nTasksOverdue: "4", nTasks: "24" },
  ]);

  return (
      <ul class="uk-nav uk-nav-default">
        <For each={projects()}>
          {(item) => (
            <li>
              <ProjectListItem
                icon={item.icon}
                projectName={item.projectName}
                nTasksOverdue={item.nTasksOverdue}
                nTasks={item.nTasks}
              />
            </li>
          )}
        </For>
      </ul>
  );
}

export default ProjectList;
