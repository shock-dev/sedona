<template>
  <div class="mobile-menu" :class="{ active: isOpen }">
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="item"
        @click="$emit('close')"
      >
        <router-link
          class="link"
          :to="item.url"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    isOpen: { type: Boolean, default: false },
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: absolute;
  z-index: 100;
  background-color: #fff;
  color: #81B3D2;
  width: 100%;
  display: none;
  justify-content: center;
  text-align: center;
  padding: 30px 20px;
  border-top: 1px solid #81B3D2;
  border-bottom: 1px solid #81B3D2;
  opacity: 0;
  top: calc(100% + 20px);
  transition: opacity .3s, top .3s;

  &.active {
    top: 100%;
    opacity: 1;
  }
}

.list {
  width: 50%;
}

.link {
  width: 100%;
  font-weight: 700;
  padding: 10px;
}

@media (max-width: 800px) {
  .mobile-menu {
    display: flex;
  }
}
</style>
