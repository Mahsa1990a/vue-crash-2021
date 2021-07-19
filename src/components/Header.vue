<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
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