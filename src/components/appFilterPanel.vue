<template>
  <div class="filter-panel">
    <div class="filter-panel__checkboxes">
      <app-filter-panel-checkboxes-col/>
      <app-filter-panel-checkboxes-col/>
    </div>
    <app-filter-panel-price/>
  </div>
</template>

<script>
import AppFilterPanelCheckboxesCol from "@/components/appFilterPanelCheckboxesCol";
import AppFilterPanelPrice from "@/components/appFilterPanelPrice";

export default {
  name: "appFilterPanel",
  components: {
    AppFilterPanelPrice,
    AppFilterPanelCheckboxesCol
  }
}
</script>
