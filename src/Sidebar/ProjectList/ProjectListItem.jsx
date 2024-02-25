function ProjectListItem(props) {
  return (
    <div class="d-flex justify-content-between">
      {/* {<div class="icon">{props.icon}</div>} */}
      <div class="flex-grow-1">{props.projectName}</div>
      <div>
        <span class="badge text-danger bg-danger-subtle me-2">{props.nTasksOverdue}</span>
        <span class="badge text-secondary bg-light">{props.nTasks}</span>
      </div>
    </div>
  );
}

export default ProjectListItem;
