<template>
  <div class="search">
    <app-top-content
      :title="topContent.title"
      :description="topContent.description"
    />

    <app-search-form/>
  </div>
</template>

<script>
import AppTopContent from "@/components/appTopContent";
import AppSearchForm from "@/components/appSearchForm";

export default {
  name: "appSearch",
  components: {
    AppSearchForm,
    AppTopContent
  },
  data: () => ({
    topContent: {
      title: 'Заинтересовались?',
      description: 'Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в седоне'
    }
  })
}
</script>
