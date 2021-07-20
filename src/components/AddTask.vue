<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return { // we'll have text, day and reminder as data
      // we put values as default
      text: '',
      day: '',
      reminder: false
      // then we wanna bind this values to the inputes, we'll do it with directivr: v-model
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      if (!this.text) {
        alert("Plz add a task");
        return;
      }
      // else create newTask
      const newTask = {
        // id: Math.floor(Math.random() * 100000), don't need it anymore, server is creating new ids by itself
        text: this.text,
        day: this.day,
        reminder: this.reminder
      };
      // console.log("newTask:", newTask); // we'll see new obj with data that we filled in // UPDATE:
      // We wanna emit it one level up to main App:
      this.$emit('add-task', newTask);

      //clear the form
      this.text = '';
      this.day = '';
      this.reminder = false;
    }
  }
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>