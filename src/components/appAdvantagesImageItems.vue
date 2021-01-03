<template>
  <div class="advantages__items image" :class="{ right: position !== 0 }">
    <div class="advantages__item">
      <div class="advantages__item-title">{{ title }}</div>
      <div class="advantages__item-num">{{ getNumber }}</div>
      <div class="advantages__item-text">{{ description }}</div>
    </div>
    <div class="advantages__img" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
  </div>
</template>

<script>
export default {
  name: "appAdvantagesImageItems",
  props: {
    title: String,
    description: String,
    number: Number,
    imageUrl: String,
    position: {
      type: Number,
      default: 0
    }
  },
  computed: {
    getNumber() {
      return `— №${this.number} —`
    }
  }
}
</script>
