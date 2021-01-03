<template>
  <div id="app">
    <div class="container">
      <app-header/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/appHeader";
export default {
  components: {AppHeader}
}
</script>

<style lang="scss">
@import "scss/index";
</style>
