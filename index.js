// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Create a new task by adding to the arrays
// A new task will be created as incomplete

// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// function completeTask(task) {
//   task.complete = true;
// }

// Print the state of a task to the console in a nice readable way

// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

// task1.title
// task1.markCompleted();
// for now, let's just make sure we see our tasks
//console.log(tasks);
