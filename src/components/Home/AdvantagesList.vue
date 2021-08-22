<template>
  <ul class="list" :class="type">
    <li
      v-for="({ imageUrl, title, description, number }, index) in list"
      :key="index"
      class="item"
    >
      <div v-if="imageUrl" class="img">
        <img :src="imageUrl" alt="">
      </div>
      <div class="title">{{ title }}</div>
      <div class="num" v-if="number">— №{{ number }} —</div>
      <div class="description">{{ description }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AdvantagesList',
  props: {
    list: Array,
    type: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;

  &.gray {
    background-color: #F2F2F2;
  }

  & .title {
    margin: 0 auto;
  }

  &:not(.gray) .title {
    margin: 28px auto;
  }
}

.item {
  width: calc(100% / 3);
  text-align: center;
  padding: 56px 70px 80px;
}

.title {
  font-size: 21px;
  max-width: 150px;
  font-weight: 700;
}

.num {
  margin: 20px 0;
}

@media (max-width: 1030px) {
  .item {
    padding: 56px 40px 80px;
  }
}

@media (max-width: 800px) {
  .item {
    padding: 40px 25px;
  }
}

@media (max-width: 700px) {
  .title {
    font-size: 18px;
  }

  .num {
    margin: 10px 0;
  }

  .item {
    width: calc(100%);
  }
}
</style>
