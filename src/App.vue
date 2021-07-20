<template>
<div class="container">
  <!-- 3. embed it here -->
  <Header @toggle-add-task='toggleAddTask' title="Task Tracker" />
  <div v-if="showAddTask">
    <AddTask @add-task='addTask' />
  </div>

  <!-- @delete-task= we're gonna have new method named deleteTask -->
  <Tasks @toggle-reminder="toggleReminder" 
    @delete-task='deleteTask' :tasks="tasks"/>
</div>
</template>

<script>
// 1. import component here
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import AddTask from './components/AddTask.vue';

export default {

  name: 'App',
  components: {
    // 2. Register component here:
    Header,
    Tasks,
    AddTask
  },
  data() { // data is a func that returns obj
    return {
      tasks: [],
      showAddTask: false // by default: F // after pressing Add Task button want to show or not show the form
    }
  },
  methods: {
    toggleAddTask() {
     this.showAddTask = !this.showAddTask; 
    },
    addTask(task) { // task is coming from newTask in AddTask component
      // sread across the current tasks(...this.tasks) and add new one(task) on to it
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      // console.log("Task", id);
      // console.log("this.tasks:", this.tasks) //3 arrays
      if (confirm("Are you sure?!")) { // to give us warning while deleting
        this.tasks = this.tasks.filter(task => task.id !== id)//we want reset this.tasks to something else
        // we wanna return everything back, except tasks with that id, because we're deleting that task
      }
    },
    toggleReminder(id) {
      // console.log("Id", id); after dbclick on each task shows id
      //updating tasks // if this task.id === id condition is T => update reminder to be opposite of task reminder, else just return task
      this.tasks = this.tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task)
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "aaaa",
        day: "Monday",
        reminder: true
      },
      {
        id: 2,
        text: "bbbb",
        day: "Tuesday",
        reminder: false
      },
      {
        id: 3,
        text: "Cccc",
        day: "Wendsday",
        reminder: true
      }
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
