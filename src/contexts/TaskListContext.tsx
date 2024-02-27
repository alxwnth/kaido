import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

import Task from "../types/Task";

const TaskListContext = createContext();

export function TaskListProvider(props) {
  const [tasks, setTasks] = createStore(props.tasks || []),
    taskList = [
      tasks,
      {
        refreshTaskList(newTasks: Task[]) {
          setTasks(newTasks);
        },
      },
    ];

  return (
    <TaskListContext.Provider value={taskList}>
      {props.children}
    </TaskListContext.Provider>
  );
}

export function useTaskList() {
  return useContext(TaskListContext);
}
