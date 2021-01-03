<template>
  <form class="search__form form">
    <div class="form__header">
      Поиск гостиницы в седоне
    </div>
    <div class="form__map">
      <div class="form__body">
        <app-form-text-input/>
      </div>
    </div>
  </form>
</template>

<script>
import AppFormTextInput from "@/components/appFormTextInput";

export default {
  name: "appSearchForm",
  components: {
    AppFormTextInput
  }
}
</script>
