<template>
<div class="container">
  <!-- 3. embed it here -->
  <Header @toggle-add-task='toggleAddTask' title="Task Tracker" :showAddTask='showAddTask' />
  
  <router-view :showAddTask='showAddTask'></router-view>
  <Footer />
</div>

</template>

<script>
// 1. import component here
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {

  name: 'App',
  components: {
    // 2. Register component here:
    Header,
    Footer
  },
  data() { // data is a func that returns obj
    return {
      showAddTask: false // by default: F // after pressing Add Task button want to show or not show the form
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask; 
    }
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
