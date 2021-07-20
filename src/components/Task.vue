<template>
<div class="task">
  <h3>{{ task.text }}</h3>
  <p>{{ task.day }}</p>
</div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  }
}
</script>

<style scope>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder { /* if reminder is T will have border on left side */
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>