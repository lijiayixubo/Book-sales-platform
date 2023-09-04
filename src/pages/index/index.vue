<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue'
import Category from './components/Category.vue'
import IndexSwiper from './components/IndexSwiper.vue'
import { getBannerList, getCardList } from '@/api'
import ProductContainer from './components/ProductContainer.vue'

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
        <ProductContainer v-for="item in cardList" :key="item.id" :title="item.name" :list="item.productList" />
      </view>
    </view>
  </view>
</template>

<style>
</style>
