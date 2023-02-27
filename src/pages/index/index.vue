<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'

import { getBannerList, getCardList } from '@/api'

let bannerList = $ref<string[]>([])
let cardList = $ref<any[]>([])

onLoad(() => {
  cardList = getCardList().data
  bannerList = getBannerList().data[0].imgUrl.split(',').map(item => item.replace('\n', ''))
})

</script>

<template>
  <view relative w-full>
    <NavigationBar />
  </view>
</template>

<style></style>
