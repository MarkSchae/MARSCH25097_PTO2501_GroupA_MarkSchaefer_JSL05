// Need to get the add new task button element and trigger the add task modal when clicked

// Display the add task modal which is hidden until the 'add task' button is clicked
function addTaskModal () {
  // Delete existing button elements
  const existingButton = document.getElementById('btn-save-new-task');
  if(existingButton) {
    existingButton.remove();
  }
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

document.getElementById('btn-add-task').addEventListener('click', addTaskModal);
// Add new task to the initialTasks array and re-save the array into local storage
function saveNewTask () {
  // Create new task and save to local storage
  const newTask = {};
  // Get the new tasks inputs from the user
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
}

/* Use as example of saving the new task client side without requiring a reload
function saveChanges (task, taskDiv) {
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
}; */