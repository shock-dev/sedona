<template>
  <label class="label">
    <input
      class="real"
      type="checkbox"
      :name="name"
      v-model="model"
    >
    <span class="fake" />
    <span class="text">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    title: String,
    name: String,
    checked: Boolean
  },
  computed: {
    model: {
      get () {
        return this.checked
      },
      set (val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.real {
  width: 1px;
  height: 1px;
  position: absolute;
  opacity: 0;
  appearance: none;
}

.real:checked + .fake {
  background-color: transparent;
  background-image: url('~@/assets/img/checkbox.png');
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 22px;
    height: 17px;
    top: 2px;
    left: 3px;
    background-image: url('~@/assets/img/mark.png');
  }
}

.fake {
  display: block;
  width: 23px;
  height: 23px;
  background-color: #fff;
  margin-right: 16px;
  border-radius: 3px;
}

.text {
  user-select: none;
  line-height: 1;
  font-weight: 400;
}
</style>
