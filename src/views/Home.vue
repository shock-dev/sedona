<template>
  <div class="home">
    <Intro />
    <Advantages />
    <Search />
  </div>
</template>

<script>
import Intro from '@/components/Intro'
import Advantages from '@/components/Advantages'
import Search from '@/components/Search'
import { setMeta } from '@/settings/meta';

export default {
  name: 'Home',
  metaInfo: setMeta('Главная'),
  components: {
    Intro,
    Advantages,
    Search
  }
}
</script>
