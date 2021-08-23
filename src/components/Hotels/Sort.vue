<template>
  <div class="sort">
    <div class="hotels-container">
      <div class="inner">
        <div class="left">
          <div class="found">Найдено: {{ count }}</div>
          <div class="name">Сортировка:</div>
          <button
            class="name-btn"
            v-click-outside="closePopup"
            @click="isSortPopupOpen = !isSortPopupOpen"
          >
            Сортировка
          </button>
          <ul class="list" :class="{ active: isSortPopupOpen }">
            <li class="list-item active"><a class="list-link" href="#">По цене</a></li>
            <li class="list-item"><a class="list-link" href="#">По типу</a></li>
            <li class="list-item"><a class="list-link" href="#">По рейтингу</a></li>
          </ul>
        </div>
        <button class="button">
          <span class="button-triangle top"></span>
          <span class="button-triangle bottom"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    count: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      isSortPopupOpen: false
    }
  },
  methods: {
    closePopup() {
      this.isSortPopupOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.sort {
  border-bottom: 1px solid #dcdcdc;
}

.inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0;
}

.left {
  display: flex;
  position: relative;
}

.found {
  font-size: 21px;
  font-weight: 700;
  margin-right: 45px;
}

.name {
  margin-right: 40px;
  font-size: 12px;
}

.name-btn {
  display: none;
  position: relative;
  font-size: 13px;

  &:before {
    content: '';
    position: absolute;
    bottom: -2px;
    height: 2px;
    width: 100%;
    background-color: #81B3D2;
  }
}

.list {
  display: flex;
  font-size: 12px;

  &-item {
    margin-right: 30px;

    &.active .sort__list-link {
      color: #81B3D2;
    }

    &:not(.active) {
      color: #a0a0a0;
      position: relative;

      &:hover {
        color: #81B3D2;
      }

      &:active {
        color: #000;

        &:after {
          display: none;
        }
      }

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        height: 1px;
        background-color: #81B3D2;
      }
    }

  }

  &-link {
    padding: 0 5px;
  }
}

.button {
  display: flex;
  align-items: center;
  outline: none;

  &-triangle {
    display: block;
    border: 8px solid transparent;

    $border-triangle: 15px;

    &.top {
      margin-right: 12px;
      border-bottom: $border-triangle solid #CACACA;
    }

    &.bottom {
      border-top: $border-triangle solid #81B3D2;
      margin-bottom: -10px;
    }
  }
}

@media (max-width: 720px) {
  .found {
    font-size: 14px;
    margin-right: 25px;
  }

  .name {
    margin-right: 18px;
    font-size: 12px;
  }

  .list-item {
    margin-right: 16px;
  }
}

@media (max-width: 560px) {
  .name {
    display: none;
  }

  .list {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    transform: translateX(30%);
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #bfbfbf;
    opacity: 0;
    visibility: hidden;

    &.active {
      opacity: 1;
      visibility: visible;
    }

    &-link {
      padding: 10px;
      width: 100%;
    }

    &-item {
      margin-right: 0;
      width: 120px;

      &:after {
        display: none;
      }

      &:not(:last-child) {
        border-bottom: 1px solid #bfbfbf;
      }
    }
  }

  .name-btn {
    display: block;
  }
}
</style>
