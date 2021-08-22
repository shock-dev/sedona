<template>
  <footer class="footer">
    <ul class="footer__social social__list">
      <li
          v-for="({ title, imageUrl }, index) in social"
          :key="index"
          class="social__item"
      >
        <a class="social__link twitter" href="#">
          <img :src="imageUrl" :alt="title">
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    social: [
      {
        title: 'twitter',
        imageUrl: require('../assets/img/twitter.png')
      },
      {
        title: 'facebook',
        imageUrl: require('../assets/img/facebook.png')
      },
      {
        title: 'youtube',
        imageUrl: require('../assets/img/youtube.png')
      }
    ]
  })
}
</script>
