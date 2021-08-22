<template>
  <form class="search__form form" @submit.prevent="">
    <div class="form__header-wrapper">
      <div class="form__header">
        Поиск гостиницы в седоне
      </div>
    </div>
    <div class="form__map">
      <div class="form__body">
        <FormTextInput
          v-for="({ title, value }, index) in textInputs"
          :key="index"
          :title="title"
          :value="value"
          @sendValueToParent="getValueFromChild(index, $event)"
        />
        <div class="form__num-row">
          <FormNumberInput
            v-for="({ title, value }, index) in numInputs"
            :key="index"
            :title="title"
            :value="value"
            @minus="minusInParent(index)"
            @plus="plusInParent(index)"
          />
        </div>
        <button class="form__btn btn-reset">Найти</button>
      </div>
    </div>
  </form>
</template>

<script>
import FormTextInput from '@/components/FormTextInput'
import FormNumberInput from '@/components/FormNumberInput'

export default {
  name: 'SearchForm',
  components: {
    FormTextInput,
    FormNumberInput
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
    ],
    numInputs: [
      {
        title: 'Взрослые:',
        value: 2
      },
      {
        title: 'Дети:',
        value: 0
      }
    ]
  }),
  methods: {
    getValueFromChild(index, data) {
      this.$set(this.textInputs[index], 'value', data)
    },
    minusInParent(index) {
      if (this.numInputs[index].value > 0) {
        this.numInputs[index].value--
      }
    },
    plusInParent(index) {
      if (this.numInputs[index].value < 20) {
        this.numInputs[index].value++
      }
    }
  }
}
</script>
