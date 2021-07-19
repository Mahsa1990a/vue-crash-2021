<template>
<!-- btn class is in style of App.vue  // : is v-bin-->
  <button :style="{ background: color }" class="btn">{{ text }}</button>
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