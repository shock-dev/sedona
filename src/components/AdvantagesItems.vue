<template>
  <ul class="advantages__items material">
    <li
        v-for="({ imageUrl, title, description, number }, index) in items"
        :key="index"
        class="advantages__item"
        :class="bgc"
    >
      <div class="advantages__item-img" v-if="imageUrl">
        <img :src="imageUrl" alt="">
      </div>
      <div class="advantages__item-title">{{ title }}</div>
      <div class="advantages__item-num" v-if="number">— №{{ number }} —</div>
      <div class="advantages__item-description">{{ description }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AdvantagesItems',
  props: {
    items: Array,
    bgc: {
      type: String,
      default: 'white'
    }
  }
}
</script>
