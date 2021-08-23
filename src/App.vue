<template>
  <div id="app">
    <div class="container">
      <div class="box">
        <Header />
        <router-view />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.box {
  box-shadow: 0 0 10px #aab3b3;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

@media (max-width: 560px) {
  .box {
    padding: 0;
    box-shadow: none;
  }
}
</style>
