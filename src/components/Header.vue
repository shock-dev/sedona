<template>
  <header class="header">
    <ul class="list">
      <li class="item">
        <router-link class="link" to="#">Информация</router-link>
      </li>
      <li class="item">
        <router-link class="link" to="#">Фото и видео</router-link>
      </li>
      <li class="item logo">
        <router-link class="link" to="/">
          <Logo />
        </router-link>
      </li>
      <li class="item">
        <router-link class="link" to="#">Карта штата</router-link>
      </li>
      <li class="item">
        <router-link class="link" to="/hotels">Гостиницы</router-link>
      </li>
    </ul>
    <button
      class="burger"
      @click="isBurgerOpen = !isBurgerOpen"
      :class="{ active: isBurgerOpen }"
    >
      <span />
    </button>
    <MobileMenu
      :isOpen="isBurgerOpen"
      :list="mobileMenuList"
      @close="isBurgerOpen = false"
    />
  </header>
</template>

<script>
import Logo from '@/components/Logo'
import MobileMenu from '@/components/MobileMenu'

export default {
  name: 'Header',
  components: { Logo, MobileMenu },
  data() {
    return {
      isBurgerOpen: false,
      mobileMenuList: [
        { title: 'Информация', url: '/' },
        { title: 'Фото и видео', url: '/' },
        { title: 'Карта штата', url: '/' },
        { title: 'Гостиницы', url: '/hotels' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 56px;
  position: relative;

  .burger {
    position: absolute;
    width: 35px;
    height: 35px;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    background-color: #e5efff;
    border-radius: 3px;
    border: .5px solid #b1c6d4;
    display: none;
    outline: none;
    overflow: hidden;

    span {
      position: absolute;
      display: block;
      top: 50%;
      transform: translateY(-50%);
      height: 3px;
      left: 4px;
      right: 4px;
      background-color: #81B3D2;
      opacity: 1;
      transition: opacity .3s;
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      height: 3px;
      background-color: #81B3D2;
      left: 4px;
      right: 4px;
      top: 8px;
      transition: all .3s;
    }

    &:after {
      top: auto;
      bottom: 8px;
    }

    &.active {

      span {
        opacity: 0;
      }

      &:before {
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:after {
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%) rotate(-225deg);
      }
    }
  }
}

.list {
  display: flex;
  height: 100%;
}

.item {
  width: calc(100% / 5);

  &:not(:last-child) {
    border-right: 1px solid #f7f7f7;
  }
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  line-height: 1;
  font-weight: 700;
}

.link .logo {
  position: absolute;
  top: 0;
  z-index: 110;
}

@media (max-width: 800px) {
  .item:not(.logo) {
    display: none;
  }

  .item:not(:last-child) {
    border-right: none;
  }

  .list {
    justify-content: center;
  }

  .header .burger {
    display: block;
  }

}

@media (max-width: 630px) {
  .item.logo {
    width: 140px;
  }
}

@media (max-width: 560px) {
  .header {
    height: 50px;
  }
}

@media (max-width: 500px) {
  .item.logo {
    width: 110px;
  }
}
</style>
