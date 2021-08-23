<template>
  <div class="filter-panel">
    <div class="hotels-container">
      <div class="inner">
        <div class="checkboxes">
          <div class="col">
            <CheckboxList
              title="Инфраструктура"
              name="infrastructure"
              :list="types"
            />
          </div>
          <div class="col">
            <CheckboxList
              title="Тип жилья"
              name="types"
              :list="infrastructure"
            />
          </div>
        </div>
        <FilterPanelPrice />
      </div>
    </div>
  </div>
</template>

<script>
import FilterPanelPrice from '@/components/Hotels/FilterPanelPrice'
import CheckboxList from '@/components/Hotels/CheckboxList'

export default {
  name: 'FilterPanel',
  components: {
    CheckboxList,
    FilterPanelPrice
  },
  data() {
    return {
      types: [
        { title: 'Гостиница', checked: false },
        { title: 'Мотель', checked: true },
        { title: 'Апартаменты', checked: false }
      ],
      infrastructure: [
        { title: 'Бассейн', checked: true },
        { title: 'Парковка', checked: false },
        { title: 'Wi-Fi', checked: true }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-panel {
  background-image: url('~@/assets/img/filter-panel-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 27px 0;
  color: #fff;
  font-weight: 700;
}

.inner {
  display: flex;
  justify-content: space-between;
}

.checkboxes {
  display: flex;
}

.col:not(:last-child) {
  margin-right: 112px;
}

@media (max-width: 860px) {
  .col:not(:last-child) {
    margin-right: 70px;
  }
}

@media (max-width: 800px) {
  .filter-panel {
    background-position: right bottom;
  }

  .inner {
    flex-direction: column;
    align-items: center;
  }

  .checkboxes {
    margin-bottom: 30px;
  }
}

@media (max-width: 400px) {
  .filter-panel {
    font-size: 12px;
  }

  .checkboxes {
    width: 100%;
  }

  .col:not(:last-child) {
    margin-right: 50px;
  }
}
</style>
