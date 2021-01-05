<template>
  <div class="hotels">
    <app-hotels-card
      v-for="(item, index) in hotels"
      :key="index"
      :title="item.title"
      :price="item.price"
      :stars="item.stars"
      :type="item.type"
      :rating="item.rating"
      :imageUrl="item.imageUrl"
    />
  </div>
</template>

<script>
import AppHotelsCard from "@/components/appHotelsCard";
import { mapGetters } from 'vuex'

export default {
  name: "appHotels",
  components: {
    AppHotelsCard
  },
  computed: {
    ...mapGetters('hotels', {
      hotels: 'items'
    })
  }
}
</script>
