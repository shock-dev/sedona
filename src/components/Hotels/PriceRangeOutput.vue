<template>
  <div class="box">
    <div class="item">От {{ from }}</div>
    <div class="item">До {{ to }}</div>
  </div>
</template>

<script>
export default {
  name: 'PriceRangeOutput',
  props: {
    from: Number,
    to: Number
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  padding: 8px;
  border: 2px solid #fff;
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    height: 22px;
    width: 2px;
    background-color: #fff;
    top: 50%;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: translateY(-50%);
  }
}

.item {
  width: 50%;
  font-weight: 400;
}
</style>
