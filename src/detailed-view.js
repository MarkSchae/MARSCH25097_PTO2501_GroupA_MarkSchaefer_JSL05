import { saveChanges } from './save-edits.js';

/**
 * Functionality to open the detailed task view 
 * @param {*object} task - parsed into this function to be used to access and display the elements of the task that the user clicked on 
 * @param {*HTMLElement} taskDiv - parse the specific column element (into the save changes function) so that the element can be moved to a new column based on the status if the status was edited 
 * @returns {*void} updates the DOM by showing the modal/card elements and inserting the task content 
 */
function detailedTasksView (task, taskDiv) {
  // Delete existing button elements
  const existingButton = document.getElementById('btn-save-changes');
  if(existingButton) {
    existingButton.remove();
  }
  // Save changes/edits button
  const button = document.createElement('button');
  button.id = 'btn-save-changes';
  button.innerHTML = 'Save Changes';
  button.className = 'click-hover';
  button.addEventListener('click', () => saveChanges(task, taskDiv));
  const detailedTaskCard = document.getElementById('detailed-task-card');
  detailedTaskCard.appendChild(button);
  const overlay = document.getElementById('backdrop');
  if (detailedTaskCard.classList.contains('hidden')) {
    detailedTaskCard.classList.remove('hidden');
    detailedTaskCard.classList.add('detailed-card-styling');
    overlay.classList.remove('hidden');
    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-description').value = task.description;
    document.getElementById('edit-task-status').value = task.status;
  }
};

// The function to return the page to normal when exiting the detailed view
function exitTasksView () {
  const detailedTaskCard = document.getElementById('detailed-task-card');
  const overlay = document.getElementById('backdrop'); 
  detailedTaskCard.classList.add('hidden');
  detailedTaskCard.classList.remove('detailed-card-styling');
  overlay.classList.add('hidden');
};

export { detailedTasksView, exitTasksView };