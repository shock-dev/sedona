<template>
  <div class="hotels">
    <FilterPanel />
    <Sort />
    <Hotels />
  </div>
</template>

<script>
import FilterPanel from '@/components/FilterPanel'
import Sort from '@/components/Sort'
import Hotels from '@/components/Hotels'

export default {
  name: 'Hotels',
  components: {
    FilterPanel,
    Sort,
    Hotels
  }
}
</script>
