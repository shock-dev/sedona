<template>
  <div class="advantages">
    <div class="advantages__top">
      <h3 class="advantages__top-title">Седона — небольшой городок в Аризоне, заслуживающий большего!</h3>
      <p class="advantages__top-text">Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!</p>
    </div>

    <app-advantages-image-items
      :key="imageItems[0].title"
      :title="imageItems[0].title"
      :description="imageItems[0].description"
      :number="imageItems[0].number"
      :imageUrl="imageItems[0].imageUrl"
    />

    <app-advantages-image-items
        :key="imageItems[1].title"
        :title="imageItems[1].title"
        :description="imageItems[1].description"
        :number="imageItems[1].number"
        :imageUrl="imageItems[1].imageUrl"
        :position="1"
    />
  </div>
</template>

<script>
import AppAdvantagesImageItems from "@/components/appAdvantagesImageItems";
export default {
  name: "appAdvantages",
  components: {AppAdvantagesImageItems},
  data: () => ({
    topContents: [
      {
        title: 'Седона — небольшой городок в Аризоне, заслуживающий большего!',
        description: 'Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!'
      },
      {
        title: 'Заинтересовались?',
        description: 'Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в седоне'
      }
    ],
    imageItems: [
      {
        title: 'Настоящий городок',
        description: 'Седона — не аттракцион для туристов, там течёт своя жизнь',
        number: 1,
        imageUrl: require('@/assets/img/advantages-bg-1.jpg')
      },
      {
        title: 'Там есть Мост дьявола',
        description: 'Да, по нему можно пройти! Если конечно вы осмелитесь',
        number: 2,
        imageUrl: require('@/assets/img/advantages-bg-2.jpg')
      }
    ],
    items: [
      {
        imageUrl: require('@/assets/img/home-icon.svg'),
        title: 'Жильё',
        description: 'Рекомендуем пожить в настоящем мотеле, всё как в кино!'
      },
      {
        imageUrl: require('@/assets/img/hamburger-icon.svg'),
        title: 'Еда',
        description: 'Всегда заказывайте фирменный бургер, вы не разочаруетесь!'
      },
      {
        imageUrl: require('@/assets/img/gift-icon.svg'),
        title: 'Сувениры',
        description: 'Не только китайского, но и местного производства!'
      }
    ],
    itemsWithoutImage: [
      {
        title: 'Небольшая площадь',
        number: 3,
        description: 'Все достопримечательности находятся очень близко'
      },
      {
        title: 'Красивая дорога',
        number: 4,
        description: 'Ехать в Седону из Лас-Вегаса совсем не скучно!'
      },
      {
        title: 'Мало туристов',
        number: 5,
        description: 'Большинство едет в гранд каньон и толпится там'
      },
    ]
  })
}
</script>
