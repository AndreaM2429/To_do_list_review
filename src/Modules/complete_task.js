export const deleteComplete = (tasks) => {
  const newTasks = tasks.filter((tasks) => tasks.completed === false);
  tasks = newTasks;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  return tasks;
};

export const removeTask = (tasks, index, save, load) => {
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  save();
  load();
};

export const markComplete = (tasks, index, save, load) => {
  tasks[index].completed = !tasks[index].completed;
  /* if (tasks[index].completed === false) {
    tasks[index].completed = true;
  } else {
    tasks[index].completed = false;
  } */
  save();
  load();
};

// export default markComplete;