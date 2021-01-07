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
    <button class="burger btn-reset">
      <span></span>
    </button>
  </header>
</template>

<script>
export default {
  name: "appHeader"
}
</script>
