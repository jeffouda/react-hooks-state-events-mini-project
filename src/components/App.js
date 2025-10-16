import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function App() {
  // state for all tasks
  const [tasks, setTasks] = useState(TASKS);
  // state for which category is selected
  const [selectedCategory, setSelectedCategory] = useState("All");

  // delete task handler
  function handleDeleteTask(deletedTaskText) {
    const updatedTasks = tasks.filter((task) => task.text !== deletedTaskText);
    setTasks(updatedTasks);
  }

  // filter selection handler
  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  // add new task handler
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // filter tasks depending on category
  const visibleTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>

      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />

      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
