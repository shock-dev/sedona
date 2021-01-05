<template>
  <div class="hotels">
    <app-filter-panel/>
    <app-sort/>
    <app-hotels/>
  </div>
</template>

<script>
import AppFilterPanel from "@/components/appFilterPanel";
import AppSort from "@/components/appSort";
import AppHotels from "@/components/appHotels";

export default {
  name: "Hotels",
  components: {
    AppHotels,
    AppSort,
    AppFilterPanel
  }
}
</script>
