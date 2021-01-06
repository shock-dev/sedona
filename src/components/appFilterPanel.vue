<template>
  <div class="filter-panel">
    <div class="hotels-container">
      <div class="filter-panel__inner">
        <div class="filter-panel__checkboxes">
          <app-filter-panel-checkboxes-col
            v-for="({ title, checkboxes }, index) in checkboxCols"
            :key="index"
            :title="title"
            :checkboxes="checkboxes"
            @changeInputFromCol="setCheckboxChecked({index, payload: $event})"
          />
        </div>
        <app-filter-panel-price/>
      </div>
    </div>
  </div>
</template>

<script>
import AppFilterPanelCheckboxesCol from "@/components/appFilterPanelCheckboxesCol";
import AppFilterPanelPrice from "@/components/appFilterPanelPrice";
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "appFilterPanel",
  components: {
    AppFilterPanelPrice,
    AppFilterPanelCheckboxesCol
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
