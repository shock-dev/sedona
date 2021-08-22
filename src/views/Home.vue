<template>
  <div>
    <Intro />
    <SectionDescription
      title="Седона — небольшой городок в Аризоне, заслуживающий большего!"
      text="Рассмотрим 5 причин, по которым Седона круче, чем гранд каньон!"
    />
    <Banner
      title="НАСТОЯЩИЙ ГОРОДОК"
      num="1"
      text="СЕДОНА — НЕ АТТРАКЦИОН ДЛЯ ТУРИСТОВ, ТАМ ТЕЧЁТ СВОЯ ЖИЗНЬ"
      file="1.jpg"
    />
    <AdvantagesList :list="whiteList" />
    <Banner
      title="Там есть Мост дьявола"
      num="2"
      text="Да, по нему можно пройти! Если конечно вы осмелитесь"
      file="2.jpg"
      right
    />
    <AdvantagesList
      :list="grayList"
      type="gray"
    />
    <SectionDescription
      title="Заинтересовались?"
      text="Укажите предполагаемые даты поездки, и мы покажем вам лучшие предложения гостиниц в седоне"
    />
    <SearchWrapper title="Поиск гостиницы в седоне">
      <div
        v-for="({ title, val }, idx) in dates"
        :key="idx"
        class="input"
      >
        <InputTextWrapper :title="title" large>
          <TextInput :value="val" />
        </InputTextWrapper>
      </div>
      <div class="row">
        <InputTextWrapper
          v-for="({ title, val }, idx) in numbers"
          :key="idx"
          :title="title"
          :small="title.length < 6"
        >
          <NumberInput
            :val="val"
            @plus="numbers[idx].val++"
            @minus="minus(idx)"
          />
        </InputTextWrapper>
      </div>
      <button class="btn">Найти</button>
    </SearchWrapper>
  </div>
</template>

<script>
import { setMeta } from '@/settings/meta'

import Intro from '@/components/Home/Intro'
import SectionDescription from '@/components/Home/SectionDescription'
import Banner from '@/components/Home/Banner'
import AdvantagesList from '@/components/Home/AdvantagesList'
import SearchWrapper from '@/components/Home/SearchWrapper'
import NumberInput from '@/components/Home/Form/NumberInput'
import InputTextWrapper from '@/components/Home/InputTextWrapper'
import TextInput from '@/components/Home/Form/TextInput'

import { whiteList, grayList } from '@/resources/advantages'

export default {
  name: 'Home',
  metaInfo: setMeta('Главная'),
  components: {
    TextInput,
    InputTextWrapper,
    NumberInput,
    SearchWrapper,
    AdvantagesList,
    Banner,
    SectionDescription,
    Intro
  },
  data() {
    return {
      adults: 0,
      children: 2,
      dates: [
        { title: 'Дата заезда', val: '24 апреля 2017' },
        { title: 'Дата выезда:', val: '4 июля 2017' }
      ],
      numbers: [
        { title: 'Взрослые', val: 0 },
        { title: 'Дети', val: 2 }
      ],
      whiteList,
      grayList
    }
  },
  methods: {
    minus(idx) {
      let { val } = this.numbers[idx]
      this.numbers[idx].val = val > 0 ? --val : val
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-between;
}

.input {
  margin-bottom: 30px;
}

.btn {
  margin-top: 55px;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  background-color: #81B3D2;
  color: #fff;
  font-weight: 700;
  font-size: 21px;
  transition: background-color .2s;
  outline: none;

  &:hover {
    background-color: #669EC0;
  }

  &:active,
  &:focus {
    color: rgba(#fff, .3);
  }
}

@media (max-width: 700px) {
  .btn {
    margin-top: 30px;
  }
}

@media (max-width: 560px) {
  .btn {
    padding: 12px 0;
    font-size: 18px;
  }
}

@media (max-width: 460px) {
  .row {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .btn {
    font-size: 14px;
  }
}
</style>
