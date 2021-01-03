<template>
  <div class="home">
    <app-intro/>
    <app-advantages/>
  </div>
</template>

<script>
import AppIntro from "@/components/appIntro";
import AppAdvantages from "@/components/appAdvantages";

export default {
  name: 'Home',
  components: {
    AppAdvantages,
    AppIntro
  }
}
</script>
