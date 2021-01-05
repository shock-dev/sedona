<template>
  <div class="hotels__card card">
    <div class="hotels-container">
      <div class="card__inner">
        <div class="card__general">
          <div class="card__img">
            <img :src="imageUrl" alt="">
          </div>
          <div class="card__info">
            <router-link class="card__info-head card__title" to="#">{{ title }}</router-link>
            <div class="card__info-body">
              <div class="card__col-first">{{ type.ru }}</div>
              <div class="card__col-second">От {{ price }} Р.</div>
            </div>
            <div class="card__info-footer card__buttons">
              <button class="card__col-first btn-reset card__btn blue">Подробнее</button>
              <button class="card__col-second btn-reset card__btn brown">Забронировать</button>
            </div>
          </div>
        </div>
        <div class="card__rate">
          <ul class="card__rate-list">
            <li class="card__rate-list__item" v-for="n in stars" :key="n"></li>
          </ul>

          <div class="card__rate-num">Рейтинг: {{ rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHotelsCard",
  props: {
    title: String,
    price: Number,
    stars: Number,
    type: {
      type: Object,
      default: () => {}
    },
    rating: String,
    imageUrl: String
  }
}
</script>
