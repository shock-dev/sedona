<template>
  <div id="app">
    <div class="container">
      <div class="shadow">
        <app-header/>
        <router-view/>
        <app-footer/>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/appHeader";
import AppFooter from "@/components/appFooter";

export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style lang="scss">
@import "scss/index";
</style>
