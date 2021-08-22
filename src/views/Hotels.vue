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
import { setMeta } from '@/settings/meta';

export default {
  name: 'Hotels',
  metaInfo: setMeta('Гостиницы'),
  components: {
    FilterPanel,
    Sort,
    HotelList
  }
}
</script>
