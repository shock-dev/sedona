<template>
  <div class="filter-panel">
    <div class="hotels-container">
      <div class="filter-panel__inner">
        <div class="filter-panel__checkboxes">
          <FilterPanelCheckboxesCol
            v-for="({ title, checkboxes }, index) in checkboxCols"
            :key="index"
            :title="title"
            :checkboxes="checkboxes"
            @changeInputFromCol="setCheckboxChecked({index, payload: $event})"
          />
        </div>
        <FilterPanelPrice />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FilterPanelCheckboxesCol from '@/components/FilterPanelCheckboxesCol'
import FilterPanelPrice from '@/components/FilterPanelPrice'

export default {
  name: 'FilterPanel',
  components: {
    FilterPanelCheckboxesCol,
    FilterPanelPrice
  },
  computed: {
    ...mapGetters('checkboxes', {
      checkboxCols: 'items'
    })
  },
  methods: {
    ...mapMutations('checkboxes', ['setCheckboxChecked'])
  }
}
</script>
