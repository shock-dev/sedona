<template>
  <div class="wrapper">
    <button
      class="minus"
      @click="$emit('minus')"
    >-</button>
    <input
      class="input"
      type="text"
      pattern="^[0-9]+$"
      :value="val"
    >
    <button
      class="plus"
      @click="$emit('plus')"
    >+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    val: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  background: #F2F2F2;
  box-sizing: border-box;
  color: #424348;
  font-size: 14px;
  text-align: center;
  width: calc(33px * 3);
}

.input {
  width: 32px;
  height: 32px;
  border: none;
  padding: 8px;
  text-align: center;
  background: #F2F2F2;
  font-weight: 700;
}

.minus,
.plus {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  font-size: 22px;
  color: #707070;
  transition: color .2s;

  &:hover,
  &:focus {
    color: #000;
  }

  &:active {
    color: #81B3D2;
  }

}
</style>
