<template>
<!-- <div class="task"> UPDATE TO: have condition for reminder and add task at the end as well-->
<div :class="[task.reminder ? 'reminder' : '', 'task']">
  <h3>{{ task.text }}
    <!-- we wanna be able to delete with clicking this icon: -->
    <i @click="onDelete(task.id)" class="fas fa-times"></i>
  </h3>
  <p>{{ task.day }}</p>
</div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  methods: {
    onDelete(id) {
      // console.log(id);
      // we wanna emit upwards into App.vue to delete data there: //we're emiting custome event here
      this.$emit('delete-task', id); // delete-task: whatever name we want(custom event), id as a param
    }
  }
}
</script>

<style scope>
.fas {
  color: red;
}
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