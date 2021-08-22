<template>
  <section class="intro">
    <img
      src="~@/assets/img/welcome.png"
      alt="Welcome to the Sedona"
    >
  </section>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  min-height: 510px;
  background-image: url('~@/assets/img/intro-bg.jpg');
  background-position: center top;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('~@/assets/img/intro-bottom.png');
    background-position: center;
    width: 100%;
    height: 57px;
  }
}

@media (max-width: 800px) {
  .intro {
    padding: 0 80px;
  }
}

@media (max-width: 560px) {
  .intro {
    padding: 0 60px;
    min-height: 480px;
  }
}

@media (max-width: 480px) {
  .intro {
    padding: 0 30px;
    min-height: 410px;
  }
}
</style>
