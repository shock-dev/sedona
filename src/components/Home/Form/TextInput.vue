<template>
  <date-picker v-model="time">
    <template slot="input">
      <input
        class="input"
        type="text"
        aria-label="Choose date"
        :value="value"
      >
    </template>
    <template slot="icon-calendar">
      <svg>
        <use href="@/assets/img/sprite.svg#calendar"></use>
      </svg>
    </template>
  </date-picker>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'TextInput',
  props: {
    title: String,
    value: String
  },
  components: {
    DatePicker
  },
  data: () => ({
    time: ''
  })
}
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  min-height: 38px;
  background-color: #EBEBEB;
  border: 2px solid #EBEBEB;
  outline: none;
  padding: 0 36px 0 15px;
  font-weight: 700;

  &:focus {
    background-color: #fff;
  }
}

.mx-datepicker {
  width: 100%;
}

.mx-datepicker svg {
  fill: #766357;
  cursor: pointer;
  transition: fill .2s;

  &:hover,
  &:focus {
    fill: #000;
  }

  &:active {
    fill: #81B3D2;
  }
}
</style>
