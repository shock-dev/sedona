<template>
  <div class="hotels__card card">
    <div class="hotels-container">
      <div class="card__inner">
        <div class="card__general">
          <div class="card__img">
            <img src="../assets/img/hotel-1.jpg" alt="">
          </div>
          <div class="card__info">
            <router-link class="card__info-head card__title" to="#">Amara Resort & Spa</router-link>
            <div class="card__info-body">
              <div class="card__col-first">Гостиница</div>
              <div class="card__col-second">От 4000 Р.</div>
            </div>
            <div class="card__info-footer card__buttons">
              <button class="card__col-first btn-reset card__btn blue">Подробнее</button>
              <button class="card__col-second btn-reset card__btn brown">Забронировать</button>
            </div>
          </div>
        </div>
        <div class="card__rate">
          <ul class="card__rate-list">
            <li class="card__rate-list__item"></li>
            <li class="card__rate-list__item"></li>
            <li class="card__rate-list__item"></li>
          </ul>

          <div class="card__rate-num">Рейтинг: 8,5</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appHotelsCard"
}
</script>
