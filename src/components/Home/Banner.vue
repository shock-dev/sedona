<template>
  <div class="banner" :class="{ right }">
    <div class="item">
      <div class="title">{{ title }}</div>
      <div class="num">— №{{ num }} —</div>
      <div class="text">{{ text }}</div>
    </div>
    <div
      class="img"
      :style="{ backgroundImage: 'url(' + require(`@/assets/img/banners/${file}`) + ')' }"
    />
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    title: String,
    text: String,
    num: String,
    file: String,
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  display: flex;
}

.banner.right .img {
  order: -1;
}

.item {
  width: calc(100% / 3);
  text-align: center;
  background-color: #81B3D2;
  padding: 43px 45px 50px;
  color: #fff;
}

.title {
  font-size: 21px;
  max-width: 150px;
  margin: 0 auto;
  font-weight: 700;
}

.num {
  margin: 20px 0;
}

.img {
  flex-grow: 1;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 800px) {
  .item {
    padding: 20px;
  }
}

@media (max-width: 700px) {
  .banner {
    flex-direction: column;
  }

  .item {
    width: 100%;
  }

  .img {
    height: 180px;
    width: 100%;
  }

  .title {
    font-size: 18px;
  }

  .num {
    margin: 10px 0;
  }
}
</style>
