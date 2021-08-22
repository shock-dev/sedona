<template>
  <div class="wrapper" :class="{ small, large }">
    <span class="text">{{ title }}:</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'InputTextWrapper',
  props: {
    title: String,
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;

  &.small .text {
    min-width: 70px;
  }
}

.text {
  min-width: 115px;
  font-weight: 700;
  white-space: nowrap;
  text-transform: uppercase;
}

@media (max-width: 580px) {
  .text {
    min-width: 90px;
  }

  .wrapper.small .text {
    min-width: 60px;
  }
}

@media (max-width: 500px) {
  .wrapper.large {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 460px) {
  .wrapper.small .text {
    min-width: 90px;
  }
}
</style>
