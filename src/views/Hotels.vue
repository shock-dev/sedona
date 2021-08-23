<template>
  <div>
    <FilterPanel />
    <Sort :count="hotels.length" />
    <div class="hotels-container">
      <HotelList :list="hotels" />
    </div>
  </div>
</template>

<script>
import { setMeta } from '@/settings/meta'
import { hotels } from '@/resources/hotels'

import FilterPanel from '@/components/Hotels/FilterPanel'
import Sort from '@/components/Hotels/Sort'
import HotelList from '@/components/Hotels/HotelList'

export default {
  name: 'Hotels',
  metaInfo: setMeta('Гостиницы'),
  components: {
    FilterPanel,
    Sort,
    HotelList
  },
  data() {
    return {
      hotels
    }
  }
}
</script>
