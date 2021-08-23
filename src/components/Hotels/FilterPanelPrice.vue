<template>
  <div class="price">
    <FilterTitleWrapper title="Стоимость в сутки (Р)">
      <PriceRangeOutput
        :from="price[0]"
        :to="price[1]"
      />
      <div class="wrapper">
        <vue-slider
          v-model="price"
          :max="3000"
          :tooltip="'none'"
          :dotSize="20"
          :height="2"
          :railStyle="{ backgroundColor: '#a4a4a4' }"
          :processStyle="{ backgroundColor: 'white' }"
        >
          <template v-slot:dot>
            <div class="dot" />
          </template>
        </vue-slider>
      </div>
      <button
        class="btn"
        @click="$emit('filter')"
      >
        Показать
      </button>
    </FilterTitleWrapper>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import PriceRangeOutput from '@/components/Hotels/PriceRangeOutput'
import FilterTitleWrapper from '@/components/Hotels/FilterTitleWrapper'

export default {
  name: 'FilterPanelPrice',
  components: {
    FilterTitleWrapper,
    PriceRangeOutput,
    VueSlider
  },
  data: () => ({
    price: [0, 3000]
  })
}
</script>

<style lang="scss" scoped>
.price {
  width: 318px;
  text-align: center;
}

.wrapper {
  padding: 0 10px;
  margin-bottom: 20px;
}

.dot {
  position: relative;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;

  &:after {
    position: absolute;
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #ABABAB;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ABABAB;
    left: 0;
    bottom: -2.5px;
    z-index: -1;
  }
}

.btn {
  border: 2px solid #fff;
  padding: 9px 34px;
  transition: all .2s;

  &:hover,
  &:focus {
    background-color: #fff;
    color: #000;
  }
}

@media (max-width: 800px) {
  .price {
    width: 350px;
  }
}

@media (max-width: 400px) {
  .price {
    width: 100%;
  }
}
</style>
