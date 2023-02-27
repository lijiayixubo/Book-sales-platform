<template>
  <view>

  </view>
</template>

<script setup lang="ts">
import { getBannerList, getCardList } from '@/api'

let bannerList = $ref<string[]>([])
let cardList = $ref<any[]>([])

onLoad(() => {
  cardList = getCardList().data
  bannerList = getBannerList().data[0].imgUrl.split(',').map(item => item.replace('\n', ''))
})

</script>

<style></style>
