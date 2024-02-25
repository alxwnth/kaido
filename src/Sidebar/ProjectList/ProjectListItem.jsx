function ProjectListItem(props) {
  return (
    <div class="project-list-item">
      <div class="info">
        {/* <div class="icon">{props.icon}</div> */}
        <div class="name">{props.projectName}</div>
      </div>
      <div class="tasks">
        <div class="overdue">{props.nTasksOverdue}</div>
        <div class="total">{props.nTasks}</div>
      </div>
    </div>
  );
}

export default ProjectListItem;
