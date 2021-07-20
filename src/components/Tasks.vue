<template>
  <!-- here we want to taking an arr and loop through them and output single task component for each one-->
  <!-- v-for we can loop through something -->
<div v-for="task in tasks">
  <h3>{{ task.text }}</h3>
</div>
</template>

<script>
export default {
  name: 'Tasks',
  // we wanna take in tasks arr as prop
  props: {
    tasks: Array
  },
  methods: {
    
  }
}
</script>

<style>
</style>