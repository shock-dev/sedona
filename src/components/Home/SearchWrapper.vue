<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__inner">
        {{ title }}
      </div>
    </div>
    <div class="map">
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchWrapper',
  props: { title: String }
}
</script>

<style lang="scss" scoped>
.header {
  min-height: 86px;
  padding: 0 15px;

  &__inner {
    height: 100%;
    background-color: #766357;
    max-width: 568px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
    font-weight: 700;
  }
}

.map {
  background-image: url('~@/assets/img/map.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 464px;
  padding: 0 15px;
}

.body {
  background-color: #fff;
  padding: 54px;
  max-width: 568px;
  margin: 0 auto;
}

@media (max-width: 560px) {
  .body {
    padding: 40px 30px;
  }

  .wrapper {
    font-size: 12px;
  }
}

@media (max-width: 460px) {
  .header {
    min-height: 60px;
  }

  .header__inner {
    font-size: 14px;
  }
}
</style>
