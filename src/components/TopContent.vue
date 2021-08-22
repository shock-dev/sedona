<template>
  <div class="top-content">
    <h3 class="top-content-title">{{ title }}</h3>
    <p class="top-content-text">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'TopContent',
  props: {
    title: String,
    description: String
  }
}
</script>
