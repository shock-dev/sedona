<template>
  <div class="form__num-col" :class="{ small: title.length < 7 }">
    <div class="form__text">{{ title }}</div>
    <div class="input-number">
      <div class="input-number__minus" @click="$emit('minus')">-</div>
      <input class="input-number__input" type="text" pattern="^[0-9]+$" :value="value">
      <div class="input-number__plus" @click="$emit('plus')">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormNumberInput',
  props: {
    title: String,
    value: Number
  }
}
</script>
