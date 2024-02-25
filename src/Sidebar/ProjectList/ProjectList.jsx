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
    <ul class="nav nav-pills flex-column mb-auto">
      <For each={projects()}>
        {(item) => (
          <li class="nav-item">
            <a href="#" class="nav-link link-body-emphasis">
              <ProjectListItem
                icon={item.icon}
                projectName={item.projectName}
                nTasksOverdue={item.nTasksOverdue}
                nTasks={item.nTasks}
              />
            </a>
          </li>
        )}
      </For>
    </ul>
  );
}

export default ProjectList;
