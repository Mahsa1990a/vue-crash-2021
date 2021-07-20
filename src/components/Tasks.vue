<template>
  <!-- here we want to taking an arr and loop through them and output single task component for each one-->
  <!-- v-for we can loop through something // outer div is for getting rid of err-->
  <div>
    <div v-for='task in tasks' :key="task.id">
      <!-- <h3>{{ task.text }}</h3> // @delete-task= will emit up one level -->
      <Task @toggle-reminder="$emit('toggle-reminder', task.id)" 
        @delete-task="$emit('delete-task', task.id)" :task="task"/>
    </div>
  </div>
</template>

<script>
import Task from './Task.vue';

export default {
  name: 'Tasks',
  components: {
    Task
  },
  // we wanna take in tasks arr as prop
  props: {
    tasks: Array
  },
  methods: {
    
  },
  emits: ['delete-task', 'toggle-reminder']
}
</script>

<style>
</style>