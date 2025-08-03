# Readme for JSL-05

# KanBan Board

A responsive Kanban board built with HTML and Tailwind CSS, designed to help users visualize tasks across various progress stages. The layout is responsive to desktop and mobile screen sizes and is styled to match the provided figma.

## 📌 Board Structure

The board includes three primary columns:

To Do – Tasks that need to be started

Doing – Tasks currently in progress

Done – Completed tasks

Each task is represented as a card and moves from left to right as it progresses.

## 🎯 Project Purpose

Visualize work clearly

Improve task flow efficiency

Foster collaboration and transparency

---

## 🚀 Project Description

This project mimics the layout and functionality of a basic Kanban board. A KanBan board is commonly used in project management tools like Trello or Jira. It is designed with a mobile-first approach and adapted for desktop using responsive CSS grid and utility classes from Tailwind. 

---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS 
- Google Fonts (Plus Jakarta Sans)

---

## 🚀 Features

🧱 Responsive grid layout using Tailwind CSS

📱 Mobile-first design

➕ Add, edit, and persist tasks in localStorage

📂 Tasks are dynamically sorted into columns (todo, doing, done)

📝 Click-to-edit tasks with modal interface

♻️ Updates reflected instantly in DOM and local storage

---

## 🧱 Setup Instructions

Clone this repository or download the project files, including index.html, input.css, output.css, and tailwind.config.js.

### 📦 Prerequisites

- [Node.js](https://nodejs.org/) and npm must be installed

You can check with:

```bash
node -v
npm -v
Install node.js and Tailwind or use vanilla CSS. If you are using Tailwind, link the CDN or initialize a local version.

Open the folder in VS Code.

In the terminal (I use the Ubuntu terminal inside VS Code/your terminal of choice), make sure you're in the project directory:

cd into the folder directory or open the folder directly from VS Code
Run Tailwind's build process to generate output.css:
npx @tailwindcss/cli -i ./src/Styles/StyleSheets/input.css -o ./src/Styles/StyleSheets/output.css --watch
This should watch for changes and automatically recompile Tailwind CSS. If the watch is not working then remove it and rebuild manually.

Use the Live Server extension in VS Code to view the HTML file.

You should now see the Kanban board layout with styled columns and cards. The layout will automatically adjust for desktop or mobile views.
```

## 🧪 Usage Examples

Once you have set up the project and opened `index.html` in a browser:

- You will see a three-column layout representing:
  - **TODO**: Tasks that need to be started
  - **DOING**: Tasks currently in progress
  - **DONE**: Tasks that are completed

- Each task is styled as a card and grouped under the corresponding column.

### Example Visual Layout

![Desktop Kanban](/images/JSL-01-Desktop.png)

![Mobile Kanban](/images/JSL-01-Mobile.png)

## 🛠️ JavaScript Functionality

The JavaScript (`index.js`) in the KanBan Board prompts the user to input details for tasks.

- **Title**  
- **Description**  
- **Status** (must be one of: `todo`, `doing`, or `done`)

The JavaScript (index.js) file powers core interactive behaviors for the Kanban board, including adding, editing, and saving tasks, as well as moving them between columns based on status.

Key Features:
Users can add tasks via a prompt (or UI).

Users can edit tasks and save changes, which updates local storage.

Tasks are saved with uniqueId to ensure each task can be uniquely identified.

Changes persist across page reloads using localStorage.

Tasks are sorted into columns (todo, doing, done) automatically.

### Key behaviors:
- The user is prompted for input.
- Input validations are checked.
- The data is stored persistantley in local storage.
- The main html page renders the pertenant information about the tasks from the stored data.

---

### Example code snippet from `tasks.js`:

```js
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
```

🔄 Editing Tasks
To edit a task, click on it. This opens a modal form pre-filled with task details. After editing:

The updated task is saved to local storage.

The card updates visually with the new title.

The card moves to the correct column based on the new status.

## 🛠️ Future Improvements

- Add more interactivity with JS
- Persisting data via the addition of a server/database and a backend JS framework/server-side framework
- Enable drag and drop functionality