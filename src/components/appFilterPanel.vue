<template>
  <div class="filter-panel">
    <div class="filter-panel__checkboxes">
      <app-filter-panel-checkboxes-col/>
      <app-filter-panel-checkboxes-col/>
    </div>
  </div>
</template>

<script>
import AppFilterPanelCheckboxesCol from "@/components/appFilterPanelCheckboxesCol";

export default {
  name: "appFilterPanel",
  components: {
    AppFilterPanelCheckboxesCol
  }
}
</script>
