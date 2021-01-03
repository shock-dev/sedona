<template>
  <form class="search__form form">
    <div class="form__header">
      Поиск гостиницы в седоне
    </div>
    <div class="form__map">
      <div class="form__body">
        <app-form-text-input
          v-for="({ title, value }, index) in textInputs"
          :key="index"
          :title="title"
          :value="value"
          @sendValueToParent="getValueFromChild(index, $event)"
        />
      </div>
    </div>
  </form>
</template>

<script>
import AppFormTextInput from "@/components/appFormTextInput";

export default {
  name: "appSearchForm",
  components: {
    AppFormTextInput
  },
  data: () => ({
    textInputs: [
      {
        title: 'Дата заезда:',
        value: '24 апреля 2017'
      },
      {
        title: 'Дата выезда:',
        value: '4 июля 2017'
      }
    ]
  }),
  methods: {
    getValueFromChild(index, data) {
      this.$set(this.textInputs[index], 'value', data)
    }
  }
}
</script>
