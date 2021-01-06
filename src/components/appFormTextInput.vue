<template>
  <div>
    <label class="form__label">
      <span class="form__text">{{ title }}</span>
      <input class="form__input" type="text" @input="sendValue" :value="value">
      <button class="btn-reset form__calendar-btn">
        <svg>
          <use href="../assets/img/sprite.svg#calendar"></use>
        </svg>
      </button>
    </label>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: "appFormTextInput",
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
