<template>
  <label class="filter-panel__label">
    <input class="filter-panel__checkbox-real" type="checkbox" @input="changeChecked" :checked="checked">
    <span class="filter-panel__checkbox-fake"></span>
    <span class="filter-panel__checkbox-text">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: 'FilterPanelCheckboxLabel',
  props: {
    title: String,
    checked: Boolean
  },
  methods: {
    changeChecked(e) {
      this.$emit('changeCheckedFromChild', e.target.checked)
    }
  }
}
</script>
