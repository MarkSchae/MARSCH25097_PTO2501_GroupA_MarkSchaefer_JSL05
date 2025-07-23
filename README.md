# Readme for JSL-04

# KanBan Board

A responsive Kanban board built with HTML and Tailwind CSS, designed to help users visualize tasks across various progress stages. The layout is responsive to desktop and mobile screen sizes and is styled to match the provided figma.

🔹 Basic Structure:

- A Kanban board usually has three columns:

- To Do – tasks that need to be started

- In Progress/Doing

- Done – completed tasks

Each task is represented by a card and moves from left to right as work progresses.

🔹 Purpose:

- Visualize work

- Limit work in progress

- Improve workflow efficiency

- Increase team collaboration and transparency

---

## 🚀 Project Description

This project mimics the layout and functionality of a basic Kanban board. A KanBan board is commonly used in project management tools like Trello or Jira. It is designed with a mobile-first approach and adapted for desktop using responsive CSS grid and utility classes from Tailwind. 

---

## 🛠️ Technologies Used

- HTML5
- Tailwind CSS 
- Google Fonts (Plus Jakarta Sans)

---

## ✅ Features

- Responsive grid layout using Tailwind CSS
- Mobile-first design with adaptation for desktop
- Task columns for `TODO`, `DOING`, and `DONE`
- Modular Tailwind class `card-styling` for task items
- Section headers with consistent spacing and style

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
npx tailwindcss -i ./input.css -o ./output.css --watch
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

The JavaScript (`index.js`) in the KanBan Board prompts the user to input details for tasks, specifically three additional tasks:

- **Title**  
- **Description**  
- **Status** (must be one of: `todo`, `doing`, or `done`)

To add tasks, click the Add Task button. This triggers prompts. The status must be one of todo, doing, or done. The tasks are then stored and logged in the console.

The JS validates the status input, converting it to lowercase and repeatedly prompting the user until a valid status is entered. 

After storing the tasks in a variable, the JS logs the title and status of all tasks marked as `done` to the browser console. If no tasks are marked as done, it logs a motivational message encouraging the user to complete a task.

### Key behaviors:
- The user is prompted for imput.
- Status input validation ensures only valid statuses are accepted.
- The inputs are stored in the appropriate variables.
- The console outputs pertenant information about the tasks.

---

### Example code snippet from `index.js`:

```js
const tasks = [];
let uniqueId = 0;
const addTaskBtn = document.querySelector('#btn-add-task');
addTaskBtn.addEventListener('click', clickToAddTask);

function clickToAddTask() {
    for(let i = 0; i < 3; i++) {
        const title = prompt(`Please enter the title of the task ${i + 1}`);
        const description = prompt('Please enter the description of the task');
        let taskStatus = prompt('Please enter the status of the task. Valid status: todo, done, doing').toLowerCase(); 
        
        while (taskStatus !== 'done' && taskStatus !== 'doing' && taskStatus !== 'todo') {
            alert('Sorry you did not enter a valid status for the task, please enter todo, done, or doing');
            taskStatus = prompt('Please enter the status of the task. Valid status: todo, done, doing').toLowerCase();
        }
        
        uniqueId++;
        tasks.push({
            uniqueId: uniqueId,
            title: title,
            description: description,
            status: taskStatus
        });
    }

    if(tasks.length == 3) {
        alert('There are enough tasks, check the console please');
    } 

    const completedTasks = tasks.filter(task => task.status === 'done'); 
    const doneTasks = completedTasks.length > 0; 

    console.log('All tasks:', tasks);
    console.log('Completed tasks:', completedTasks);

    if(!doneTasks) {
        console.log("No tasks completed, let's get to work!");
    }
};
```
## 🛠️ Future Improvements

- Add more interactivity with JS
- Persisting data via the addition of a server/database and a backend JS framework/server-side framework
- Enable drag and drop functionality