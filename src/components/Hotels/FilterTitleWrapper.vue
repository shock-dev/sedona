<template>
  <div>
    <div class="title">{{ title }}:</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'FilterTitleWrapper',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  margin-bottom: 20px;
}

@media (max-width: 400px) {
  .title {
    font-size: 14px;
  }
}
</style>
