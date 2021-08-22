<template>
  <div class="hotels">
    <HotelsCard
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
import { mapGetters } from 'vuex'
import HotelsCard from '@/components/HotelsCard'

export default {
  name: 'Hotels',
  components: { HotelsCard },
  computed: {
    ...mapGetters('hotels', {
      hotels: 'items'
    })
  }
}
</script>
