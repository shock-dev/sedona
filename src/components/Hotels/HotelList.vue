<template>
  <div class="hotels">
    <Card
      v-for="(item, index) in list"
      class="card"
      :key="index"
      :title="item.title"
      :price="item.price"
      :stars="item.stars"
      :type="item.type"
      :rating="item.rating"
      :imageUrl="item.imageUrl"
    />
  </div>
</template>

<script>
import Card from '@/components/Hotels/Card'

export default {
  name: 'Hotels',
  components: { Card },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.card {
  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdc;
  }
}
</style>
