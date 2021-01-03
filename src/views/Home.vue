<template>
  <div class="home">
    <app-intro/>
    <app-advantages/>
    <app-search/>
  </div>
</template>

<script>
import AppIntro from "@/components/appIntro";
import AppAdvantages from "@/components/appAdvantages";
import AppSearch from "@/components/appSearch";

export default {
  name: 'Home',
  components: {
    AppSearch,
    AppAdvantages,
    AppIntro
  }
}
</script>
