// Need to get the add new task button element and trigger the add task modal when clicked
import { filterTasks } from "./filter.js";
import { renderTasks } from "./tasks.js";
import { exitTasksView } from './detailed-view.js';

// Display the add task modal which is hidden until the 'add task' button is clicked
function addTaskModal () {
  // Delete existing button elements
  const existingButton = document.getElementById('btn-save-new-task');
  if(existingButton) {
    existingButton.remove();
  }
  // Remove any existing text inside the user input fields
  document.getElementById('add-title').value = '';
  document.getElementById('add-description').value = '';
  // Display the modal and set up the events/functions for saving the new task
  const button = document.createElement('button');
  button.id = 'btn-save-new-task';
  button.innerHTML = 'Save Task';
  button.className = 'click-hover';
  button.addEventListener('click', () => saveNewTask());
  const taskModal = document.getElementById('add-task-modal');
  taskModal.appendChild(button);
  const overlay = document.getElementById('backdrop');
  if (taskModal.classList.contains('hidden')) {
    taskModal.classList.remove('hidden');
    taskModal.classList.add('detailed-card-styling');
    overlay.classList.remove('hidden');
  }
};

document.querySelectorAll('#btn-add-task').forEach(btn => {
  btn.addEventListener('click', addTaskModal);
});

// Validation check for empty user input fields and a alert/required message display
function checkInputs() {
  const inputs = [
    document.getElementById('add-title'),
    document.getElementById('add-description'),
    document.getElementById('add-task-status')
  ];

  for (const input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      input.focus();
      return false; // False if invalid
    }
  }
  return true; // All valid
};

// Add new task to the initialTasks array and re-save the array into local storage
function saveNewTask () {
  // Need to validate that the fields are not empty and display a required type message if they are empty
  if (!checkInputs()) {
    return; // Do not let the rest of the funciton run
  }
  // Create new task and save to local storage
  const newTask = {};
  // Get the new tasks inputs from the user
  // Add a check for empty input fields(required)
  newTask.title = document.getElementById('add-title').value;
  newTask.description = document.getElementById('add-description').value;
  newTask.status = document.getElementById('add-task-status').value;
  // For the ID, find the highest value that aleady exists and add one for the new ID
  // Get the currently saved tasks and create a new array just of the ID values
  const tasksData = localStorage.getItem('tasks');
  const tasks = JSON.parse(tasksData);
  const tasksId = tasks.map(task => task.id);
  newTask.id = (Math.max(...tasksId) + 1);
  // Save the new task into the locally stord 'tasks' array
  tasks.push(newTask);
  // Update the local storage array of the initialTasks
  localStorage.setItem('tasks', JSON.stringify(tasks));

  filterTasks();
  renderTasks();
  exitTasksView();
};