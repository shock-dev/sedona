<template>
  <div id="app">
    <div class="container">
      <div class="help-wrapper">
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
