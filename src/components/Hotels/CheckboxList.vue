<template>
  <FilterTitleWrapper :title="title">
    <Checkbox
      v-for="(item, index) in list"
      :key="index"
      class="checkbox"
      :title="item.title"
      v-model="item.checked"
    />
  </FilterTitleWrapper>
</template>

<script>
import FilterTitleWrapper from '@/components/Hotels/FilterTitleWrapper'
import Checkbox from '@/components/Hotels/Checkbox'

export default {
  name: 'CheckboxList',
  components: { FilterTitleWrapper, Checkbox },
  props: {
    title: String,
    name: String,
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.checkbox:not(:last-child) {
  margin-bottom: 20px;
}
</style>
