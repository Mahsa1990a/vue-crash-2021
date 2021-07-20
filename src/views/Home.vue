<template>
  <div>
    <div v-if="showAddTask">
      <AddTask @add-task='addTask' />
    </div>

    <!-- @delete-task= we're gonna have new method named deleteTask -->
    <Tasks @toggle-reminder="toggleReminder" 
      @delete-task='deleteTask' :tasks="tasks"
    />
  </div>
</template>

<script>
import Tasks from '../components/Tasks.vue';
import AddTask from '../components/AddTask.vue';
export default {
  name: 'Home',
  props: {
    showAddTask: Boolean
  },
  components: {
    Tasks,
    AddTask
  },
  data() { // data is a func that returns obj
    return {
      tasks: []
    }
  },
  methods: {

    async addTask(task) { // task is coming from newTask in AddTask component

      const res = await fetch('api/tasks', { //it's a POST request, so we need second argument
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(task)
      });
      const data = await res.json(); //will give new task back
      // spread across the current tasks(...this.tasks) and add new one(task) on to it
      // this.tasks = [...this.tasks, task] update to:
      this.tasks = [...this.tasks, data]
    },

    async deleteTask(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        });
        res.status === 200 ? (this.tasks = this.tasks.filter(task => task.id !== id)) : alert("Error deleting task");
      }

      // console.log("Task", id);
      // console.log("this.tasks:", this.tasks) //3 arrays
      // if (confirm("Are you sure?!")) { // to give us warning while deleting
      //   this.tasks = this.tasks.filter(task => task.id !== id)//we want reset this.tasks to something else
      //   // we wanna return everything back, except tasks with that id, because we're deleting that task
      // }
    },

    async toggleReminder(id) {

      const taskToToggle = await this.fetchTask(id); //it will get the actual task we want to toggle
      const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder};

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(updateTask)
      });

      const data = await res.json();
      // console.log("Id", id); after dbclick on each task shows id
      //updating tasks // if this task.id === id condition is T => update reminder to be opposite of task reminder, else just return task
      this.tasks = this.tasks.map(task => 
        // task.id === id ? {...task, reminder: !task.reminder} : task    UPDATE
        task.id === id ? {...task, reminder: data.reminder} : task
      )
    },

    // After adding json-server
    async fetchTasks() {
      // const response = await fetch('http://localhost:42115/tasks');
      const response = await fetch('api/tasks');
      const data = await response.json();
      return data;
    },
    // Fetch specific task
    async fetchTask(id) {
      // const response = await fetch(`http://localhost:42115/tasks/${id}`);
      const response = await fetch(`api/tasks/${id}`);
      const data = await response.json();
      return data;
    }
  },

  //this.fetchTasks() returns promis, so we need to have async await
  async created() {
    this.tasks = await this.fetchTasks(); // UPDATED hard coded arr with this.fetchTasks
  }
}
</script>