import { filterTasks } from './filter.js';
import { detailedTasksView } from './detailed-view.js'; 

// Generate the tasks for the html using the array of objects

// Create the html to add to the DOM for each column
const toDoColumn = document.getElementById('todo-column');
const doneColumn = document.getElementById('done-column');
const doingColumn = document.getElementById('doing-column');

function renderTasks () {
  const { toDoTasks, doneTasks, doingTasks } = filterTasks();
  document.querySelectorAll('.tasks-divs').forEach(task => task.remove());
  // Loop through each object in the new array and create the divs for each one
  for(let i = 0; i < toDoTasks.length; i++) { // Could use a forEach method to make this cleaner
    const newToDoTask = document.createElement('div');
    // Add the function for the detailed view/edits/save changes of the task here
    newToDoTask.addEventListener('click', () => detailedTasksView(toDoTasks[i], newToDoTask));
    newToDoTask.className = 'tasks-divs card-styling click-hover';
    newToDoTask.innerHTML = toDoTasks[i].title;
    toDoColumn.appendChild(newToDoTask);
  }

  // Done
  for(let i = 0; i < doneTasks.length; i++) { // Could use a forEach method to make this cleaner
    const doneTask = document.createElement('div');
    // Add the function for the detailed view/edits/save changes of the task here
    doneTask.addEventListener('click', () => detailedTasksView(doneTasks[i], doneTask));
    doneTask.className = 'tasks-divs card-styling click-hover';
    doneTask.innerHTML = doneTasks[i].title;
    doneColumn.appendChild(doneTask);
  }

  // Doing
  for(let i = 0; i < doingTasks.length; i++) { // Could use a forEach method to make this cleaner
    const doingTask = document.createElement('div');
    // Add the function for the detailed view/edits/save changes of the task here 
    doingTask.addEventListener('click', () => detailedTasksView(doingTasks[i], doingTask));
    doingTask.className = 'tasks-divs card-styling click-hover';
    doingTask.innerHTML = doingTasks[i].title;
    doingColumn.appendChild(doingTask);
  }
};
renderTasks();

export { toDoColumn, doneColumn, doingColumn, renderTasks };