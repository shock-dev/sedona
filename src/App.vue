<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "scss/index";
</style>
<script>
import AppHeader from "@/components/appHeader";
export default {
  components: {AppHeader}
}
</script>
