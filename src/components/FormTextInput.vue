<template>
  <div class="form__label">
    <div class="form__text">{{ title }}</div>
    <date-picker
        v-model="time"
    >
      <template slot="input">
          <input class="form__input" type="text" @input="sendValue" :value="value" aria-label="Choose date">
      </template>
      <template slot="icon-calendar">
        <svg>
          <use href="../assets/img/sprite.svg#calendar"></use>
        </svg>
      </template>
    </date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'FormTextInput',
  props: {
    title: String,
    value: String
  },
  components: {
    DatePicker
  },
  data: () => ({
    time: ''
  }),
  methods: {
    sendValue(e) {
      this.$emit('sendValueToParent', e.target.value)
    }
  }
}
</script>
