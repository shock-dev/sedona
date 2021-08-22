<template>
  <div class="advantages">
    <TopContent
      :title="topContent.title"
      :description="topContent.description"
    />

    <AdvantagesImageItems
      :key="imageItems[0].title"
      :title="imageItems[0].title"
      :description="imageItems[0].description"
      :number="imageItems[0].number"
      :imageUrl="imageItems[0].imageUrl"
    />

    <AdvantagesItems
      :items="items"
    />

    <AdvantagesImageItems
        :key="imageItems[1].title"
        :title="imageItems[1].title"
        :description="imageItems[1].description"
        :number="imageItems[1].number"
        :imageUrl="imageItems[1].imageUrl"
        :position="1"
    />

    <AdvantagesItems
        :items="itemsWithoutImage"
        bgc="gray"
    />
  </div>
</template>

<script>
import TopContent from '@/components/TopContent'
import AdvantagesImageItems from '@/components/AdvantagesImageItems'
import AdvantagesItems from '@/components/AdvantagesItems'

const topContent = {
  title: 'Седона — небольшой городок в Аризоне, заслуживающий большего!',
  description: 'Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!'
}

const imageItems = [
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
]

const items = [
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
]

const itemsWithoutImage = [
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

export default {
  name: 'Advantages',
  components: {
    TopContent,
    AdvantagesImageItems,
    AdvantagesItems
  },
  data: () => ({
    topContent: topContent,
    imageItems: imageItems,
    items: items,
    itemsWithoutImage: itemsWithoutImage
  })
}
</script>
