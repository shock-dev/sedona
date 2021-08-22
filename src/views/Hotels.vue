<template>
  <div class="hotels">
    <FilterPanel />
    <Sort />
    <HotelList />
  </div>
</template>

<script>
import FilterPanel from '@/components/FilterPanel'
import Sort from '@/components/Sort'
import HotelList from '@/components/HotelList'

export default {
  name: 'Hotels',
  components: {
    FilterPanel,
    Sort,
    HotelList
  }
}
</script>
