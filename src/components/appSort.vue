<template>
  <div class="sort">
    <div class="hotels-container">
      <div class="sort__inner">
        <div class="sort__left">
          <div class="sort__found">Найдено: {{ count }}</div>
          <div class="sort__name">Сортировка:</div>
          <button class="sort__name-btn btn-reset" @click="isCortPopupOpen = !isCortPopupOpen">Сортировка</button>
          <ul class="sort__list" :class="{ active: isCortPopupOpen }">
            <li class="sort__list-item active"><a class="sort__list-link" href="#">По цене</a></li>
            <li class="sort__list-item"><a class="sort__list-link" href="#">По типу</a></li>
            <li class="sort__list-item"><a class="sort__list-link" href="#">По рейтингу</a></li>
          </ul>
        </div>
        <button class="sort__button btn-reset">
          <span class="sort__button-triangle top"></span>
          <span class="sort__button-triangle bottom"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "appSort",
  data: () => ({
    isCortPopupOpen: false
  }),
  computed: {
    ...mapGetters('hotels', ['count'])
  }
}
</script>
