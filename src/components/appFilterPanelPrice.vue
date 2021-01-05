<template>
  <div class="filter-panel__price">
    <div class="filter-panel__title">Стоимость в сутки (Р):</div>
    <div class="filter-panel__price-box">
      <div class="filter-panel__price-box__item">от 0</div>
      <div class="filter-panel__price-box__item">До 3000</div>
    </div>
    <div class="range-slider__wrapper">
      <vue-range-slider
          :height="2"
          v-model="value"
          :dot-size="20"
          :tooltip="false"
          :bg-style="{
            backgroundColor: '#8f8f8f'
          }"
          :process-style="{
            backgroundColor: '#fff'
          }"
          :min="0"
          :max="3000"
      ></vue-range-slider>
    </div>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import VueRangeSlider from 'vue-range-component'

export default {
  name: "appFilterPanelPrice",
  data() {
    return {
      value: [0, 2700]
    }
  },
  components: {
    VueRangeSlider
  }
}
</script>
