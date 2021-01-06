<template>
  <div class="filter-panel__price">
    <div class="filter-panel__title">Стоимость в сутки (Р):</div>
    <div class="filter-panel__price-box">
      <div class="filter-panel__price-box__item">от 0</div>
      <div class="filter-panel__price-box__item">До 3000</div>
    </div>
    <div class="range-slider__wrapper">
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
          <div class="range-slider__dot"></div>
        </template>
      </vue-slider>
    </div>
    <button class="filter-panel__btn btn-reset">Показать</button>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: "appFilterPanelPrice",
  components: {
    VueSlider
  },
  data: () => ({
    price: [500, 2500]
  })
}
</script>
