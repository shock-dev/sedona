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

export default {
  name: 'Home',
  components: {
    Intro,
    Advantages,
    Search
  }
}
</script>
