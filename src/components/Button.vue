<template>
<!-- btn class is in style of App.vue  // : is v-bin // v-on is for click event with onClick function or use @-->
  <button @click="onClick()" :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String
  },
  methods: {
    onClick() {
      // console.log('Clicked!');
      // this.$emit('toggle-add-task') UPDATE it to be reusable for other projects
      this.$emit('btn-click')
    }
  }
}
</script>

<style>
</style>