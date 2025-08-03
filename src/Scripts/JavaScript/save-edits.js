import { exitTasksView } from './detailed-view.js';
import { filterTasks } from "./filter.js";
import { renderTasks } from "./tasks.js";
import { toDoColumn, doneColumn, doingColumn } from './tasks.js';

/**
 * Updates the tasks object with the users edits
 * @param {*object} task - getting the key value pairs from the object that the user is editing and update the task with the edits
 * @param {*HTMLElement} taskDiv - getting the element in order to update each element with the edits 
 * @returns {*void} - updates the task object with the edited values and moves the task if the status changes
 */
function saveChanges (task, taskDiv) {
  // Save changes to the task objects saved inside the local storage
  // At the moment this only saves changes for the session
  task.title = document.getElementById('edit-title').value;
  task.description = document.getElementById('edit-description').value;
  task.status = document.getElementById('edit-task-status').value;
  taskDiv.innerHTML = task.title;
  if (task.status.toLowerCase() === 'todo') {
    toDoColumn.appendChild(taskDiv);
  } else if (task.status.toLowerCase() === 'done') {
    doneColumn.appendChild(taskDiv);
  } else if (task.status.toLowerCase() === 'doing') {
    doingColumn.appendChild(taskDiv);
  }

  const updatedTaskId = task.id;
  const tasksData = localStorage.getItem('tasks');
  const tasks = JSON.parse(tasksData);
  
  // Save the new task into the locally stord 'tasks' array
  // Find the index of the task you want to update
  const index = tasks.findIndex(tsk => tsk.id === updatedTaskId);

  if (index !== -1) {
    tasks[index] = task; // Replace the task at that index
  } else {
    console.log("Task not found, maybe add instead?");
  }
  // Update the local storage array of the initialTasks
  localStorage.setItem('tasks', JSON.stringify(tasks));

  filterTasks();
  renderTasks();
  exitTasksView();
};
// Get all instances of the exit button and add the click listner to run the function
document.querySelectorAll('.exit-btn').forEach(btn => {btn.addEventListener('click', exitTasksView)});

export { saveChanges };
