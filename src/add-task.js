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
  button.addEventListener('click', () => saveNewTask(task, taskDiv));
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

// Get the new task from the user inputs
function saveNewTask () {
  // Create new task and save to local storage

  // Get the new tasks inputs from the user

  // Save the new task into the initialTasks array

  // Update the local storage array of the initialTasks
    // Get the array from local storage
    // Push the new task to the array
    // Save the new array back to local storage
}




// Use as example of saving the new task
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
};