<template>
  <div class="search">
    <TopContent
      :title="topContent.title"
      :description="topContent.description"
    />

    <SearchForm />
  </div>
</template>

<script>
import TopContent from '@/components/TopContent'
import SearchForm from '@/components/SearchForm'

export default {
  name: 'Search',
  components: {
    TopContent,
    SearchForm
  },
  data: () => ({
    topContent: {
      title: 'Заинтересовались?',
      description: 'Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в седоне'
    }
  })
}
</script>
