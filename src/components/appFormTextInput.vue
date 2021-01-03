<template>
  <div>
    <label class="form__label">
      <span class="form__text">{{ title }}</span>
      <input class="form__input" type="text" @input="sendValue" :value="value">
    </label>
  </div>
</template>

<script>
export default {
  name: "appFormTextInput",
  props: {
    title: String,
    value: String
  },
  methods: {
    sendValue(e) {
      this.$emit('sendValueToParent', e.target.value)
    }
  }
}
</script>
