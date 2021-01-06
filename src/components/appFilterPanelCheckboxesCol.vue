<template>
  <div class="filter-panel__checkboxes-col">
    <div class="filter-panel__title">{{ title }}</div>
    <app-filter-panel-checkbox-label
      v-for="({ title, checked }, index) in checkboxes"
      :key="index"
      :title="title"
      :checked="checked"
      @changeCheckedFromChild="changeChecked(index, $event)"
    />
  </div>
</template>

<script>
import AppFilterPanelCheckboxLabel from "@/components/appFilterPanelCheckboxLabel";

export default {
  name: "appFilterPanelCheckboxesCol",
  props: {
    title: String,
    checkboxes: Array
  },
  components: {
    AppFilterPanelCheckboxLabel
  },
  methods: {
    changeChecked(index, data) {
      this.$emit('changeInputFromCol', { index, data })
    }
  }
}
</script>
