<template>
<!-- btn class is in style of App.vue  // : is v-bin // v-on is for click event with onClick function-->
  <button v-on:click="onClick()" :style="{ background: color }" class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    color: String
  }
}
</script>

<style>
</style>