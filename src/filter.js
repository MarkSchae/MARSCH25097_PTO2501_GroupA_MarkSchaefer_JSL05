// Sort/filter into todo/done/doing-column using the status of the task
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

// Check if any data with the key 'users' exists and save the initial tasks to local storage
if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify(initialTasks));
  console.log('Tasks saved');
} else {
  console.log('Tasks already exists in the local storage');
}

const tasksData = localStorage.getItem('tasks');
const tasks = JSON.parse(tasksData);
// Filter the tasks by their status and store them in separate arrays
const toDoTasks = tasks.filter(task => task.status === 'todo');
const doneTasks = tasks.filter(task => task.status === 'done');
const doingTasks = tasks.filter(task => task.status === 'doing');


export {toDoTasks, doneTasks, doingTasks};
