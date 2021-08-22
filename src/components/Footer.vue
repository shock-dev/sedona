<template>
  <footer class="footer">
    <ul class="footer__social social__list">
      <li
        v-for="(item, index) in social"
        :key="index"
        class="social__item"
      >
        <a class="social__link" href="#">
          <img
            :src="require(`@/assets/img/socialNetworks/${item.file}`)"
            :alt="item.title"
          >
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import { socialNetworks } from '@/resources/socialNetworks'

export default {
  name: 'Footer',
  data: () => ({
    social: socialNetworks
  })
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding: 36px 0;
  margin-top: auto;
  border-top: 1px solid #dcdcdc;
}

.social {

  &__list {
    display: flex;
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #81B3D2;
    width: 46px;
    height: 46px;
    margin: 0 3px;
    transition: background-color .2s;
    outline: none;

    &:hover,
    &:focus {
      background-color: #669EC0;
    }

    &:active {
      background-color: #669EC0;

      img {
        opacity: .4;
      }
    }
  }
}
</style>
