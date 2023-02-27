<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import Category from './components/Category.vue'
import IndexSwiper from './components/IndexSwiper.vue'
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
    <view style="padding: 0 35rpx 0 35rpx" box-border overflow-hidden>
      <view>
        <IndexSwiper :banner-list="bannerList" />
        <Category />
      </view>
    </view>
  </view>
</template>

<style></style>
