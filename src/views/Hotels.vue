<template>
  <div class="hotels">
    <app-filter-panel/>
    <app-sort/>
    <app-hotels/>
  </div>
</template>

<script>
import AppFilterPanel from "@/components/appFilterPanel";

export default {
  name: "Hotels",
  components: {
    AppFilterPanel
  }
}
</script>
