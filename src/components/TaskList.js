import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskComponents = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));

  return <div className="tasks">{taskComponents}</div>;
}

export default TaskList;
