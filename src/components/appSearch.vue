<template>
  <div class="search">
    <app-top-content
      :title="topContent.title"
      :description="topContent.description"
    />
  </div>
</template>

<script>
import AppTopContent from "@/components/appTopContent";
export default {
  name: "appSearch",
  components: {AppTopContent},
  data: () => ({
    topContent: {
      title: 'Заинтересовались?',
      description: 'Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в седоне'
    }
  })
}
</script>
