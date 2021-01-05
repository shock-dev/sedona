<template>
  <div class="hotels">
    <app-hotels-card/>
    <app-hotels-card/>
    <app-hotels-card/>
  </div>
</template>

<script>
import AppHotelsCard from "@/components/appHotelsCard";

export default {
  name: "appHotels",
  components: {
    AppHotelsCard
  }
}
</script>
