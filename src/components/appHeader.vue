<template>
  <header class="header">
    <ul class="header__list">
      <li class="header__item">
        <router-link class="header__link" to="#">Информация</router-link>
      </li>
      <li class="header__item">
        <router-link class="header__link" to="#">Фото и видео</router-link>
      </li>
      <li class="header__item logo">
        <router-link class="header__link" to="/">
          <img class="header__logo" src="../assets/img/logo.svg" alt="Logo">
        </router-link>
      </li>
      <li class="header__item">
        <router-link class="header__link" to="#">Карта штата</router-link>
      </li>
      <li class="header__item">
        <router-link class="header__link" to="/hotels">Гостиницы</router-link>
      </li>
    </ul>
    <button class="burger btn-reset" @click="isBurgerOpen = !isBurgerOpen">
      <span></span>
    </button>

    <div class="mobile-menu" :class="{ active: isBurgerOpen }">
      <ul class="mobile-menu__list">
        <li class="mobile-menu__item"><router-link class="mobile-menu__link" to="/">Информация</router-link></li>
        <li class="mobile-menu__item"><router-link class="mobile-menu__link" to="/">Фото и видео</router-link></li>
        <li class="mobile-menu__item"><router-link class="mobile-menu__link" to="/">Карта штата</router-link></li>
        <li class="mobile-menu__item"><router-link class="mobile-menu__link" to="/">Гостиницы</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  data: () => ({
    isBurgerOpen: false
  })
}
</script>
