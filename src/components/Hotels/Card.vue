<template>
  <div class="card">
    <div class="general">
      <div class="pic">
        <img :src="imageUrl" alt="">
      </div>
      <div class="info">
        <router-link class="info-head title" to="#">{{ title }}</router-link>
        <div class="info-body">
          <div class="col-first">{{ type.ru }}</div>
          <div class="col-second">От {{ price }} Р.</div>
        </div>
        <div class="info-footer buttons">
          <button class="col-first btn blue">Подробнее</button>
          <button class="col-second btn brown">Забронировать</button>
        </div>
      </div>
    </div>
    <div class="rate">
      <ul class="rate-list">
        <li class="rate-list__item" v-for="n in stars" :key="n"></li>
      </ul>

      <div class="rate-num">Рейтинг: {{ rating }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelsCard',
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

<style lang="scss" scoped>
.card {
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
}

.general {
  display: flex;
}

.pic {
  width: 135px;
  height: 90px;
  margin-right: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.title {
  font-size: 21px;
  font-weight: 700;
  transition: color .2s;
  outline: none;

  &:hover,
  &:focus {
    color: #81B3D2;
  }

  &:active {
    color: rgba(#81B3D2, .3);
  }
}

.col-first {
  width: 110px;
  margin-right: 6px;
}

.col-second {
  width: 145px;
}

.info-body {
  display: flex;
  margin-bottom: 11px;
}

.btn {
  padding: 5px 0;
  color: #fff;
  font-weight: 700;
  transition: all .2s;
  outline: none;

  &.blue {
    background-color: #81B3D2;

    &:hover,
    &:focus {
      background-color: #5496BD;
    }

    &:active {
      background-color: #5496BD;
      color: rgba(#fff, .3);
    }
  }

  &.brown {
    background-color: #766357;

    &:hover,
    &:focus {
      background-color: #604E43;
    }

    &:active {
      background-color: #604E43;
      color: rgba(#fff, .3);
    }
  }
}

.rate {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  &-list {
    display: flex;

    &__item {
      width: 18px;
      height: 17px;
      background-image: url('~@/assets/img/star.png');

      &:not(:last-child) {
        margin-right: 6px;
      }
    }
  }

  &-num {
    background-color: #F2F2F2;
    padding: 5px 14px;
    color: #666666;
  }
}

@media (max-width: 700px) {
  .card {
    flex-direction: column;
    align-items: flex-start;
  }

  .rate {
    margin-top: 20px;
    align-items: center;
  }

  .rate-list {
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .general {
    flex-direction: column;
    align-items: center;
  }

  .card {
    align-items: center;
    text-align: center;
  }

  .pic {
    width: 180px;
    height: 130px;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .title {
    margin-bottom: 10px;
  }
}
</style>
