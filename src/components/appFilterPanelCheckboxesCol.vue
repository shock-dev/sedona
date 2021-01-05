<template>
  <div class="filter-panel__checkboxes-col">
    <div class="filter-panel__title">Инфраструктура:</div>
    <app-filter-panel-checkbox-label/>
    <app-filter-panel-checkbox-label/>
    <app-filter-panel-checkbox-label/>
  </div>
</template>

<script>
import AppFilterPanelCheckboxLabel from "@/components/appFilterPanelCheckboxLabel";

export default {
name: "appFilterPanelCheckboxesCol",
  components: {AppFilterPanelCheckboxLabel}
}
</script>

<style scoped>

</style>
