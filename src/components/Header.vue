<template>
  <header>
    <h1>{{ title }}</h1>
    <Button text="Add Task" color="green"/>
  </header>
</template>

<script>
import Button from './Button.vue';

export default {
  name: "Header",
  components : {
    Button
  },
  // props: ['title']    OR:
  props: {
    title: String, //you can verify specific type
  }
}
</script>

<style scoped>
/* scoped means anything here would be only for this component */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>