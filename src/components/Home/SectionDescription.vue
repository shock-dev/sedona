<template>
  <div class="wrapper">
    <h3 class="title">{{ title }}</h3>
    <p class="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'SectionDescription',
  props: {
    title: String,
    text: String
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 58px 15px;
  text-align: center;
  max-width: 484px;
  margin: 0 auto;
}

.title {
  font-size: 21px;
  margin-bottom: 25px;
}

.text {
  color: #333;
}
</style>
