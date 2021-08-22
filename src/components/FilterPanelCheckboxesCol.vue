<template>
  <div class="filter-panel__checkboxes-col">
    <div class="filter-panel__title">{{ title }}</div>
    <FilterPanelCheckboxLabel
      v-for="({ title, checked }, index) in checkboxes"
      :key="index"
      :title="title"
      :checked="checked"
      @changeCheckedFromChild="changeChecked(index, $event)"
    />
  </div>
</template>

<script>
import FilterPanelCheckboxLabel from '@/components/FilterPanelCheckboxLabel'

export default {
  name: 'FilterPanelCheckboxesCol',
  props: {
    title: String,
    checkboxes: Array
  },
  components: {
    FilterPanelCheckboxLabel
  },
  methods: {
    changeChecked(index, data) {
      this.$emit('changeInputFromCol', { index, data })
    }
  }
}
</script>
