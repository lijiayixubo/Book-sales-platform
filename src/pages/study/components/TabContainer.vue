<script lang="ts" setup>
import Product from './Product.vue'
import { queryPlayRecordPage } from '@/api/user'

let playRecordPage = $ref<any[]>([])

playRecordPage = queryPlayRecordPage().data.current_data

</script>

<template>
  <view class="container">
    <view class="products">
      <Product v-for="item in playRecordPage" :key="item.id" :product="item" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {

  .tab_top {
    width: 100%;
    display: flex;
    background-color: #c9e2f6;
  }

  .products {
    padding: 0 20rpx;
    margin-top: 45rpx;
  }
}
</style>
