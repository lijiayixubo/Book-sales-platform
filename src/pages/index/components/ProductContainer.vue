<script lang="ts" setup>
import Item from './ProductContainer/Item.vue'
import type { IProduct } from '@/typings/interface'

defineProps<{
  title: string
  list: IProduct[]
}>()

</script>

<template>
  <view class="hot_product">
    <div between mb-3>
      <text class="title" truncate>
        {{ title }}
      </text>
    </div>
    <view class="items">
      <Item v-for="item in list" :key="item.id" :item="item" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.hot_product {
  display: flex;
  flex-direction: column;
  margin-top: 42rpx;

  .title {
    color: #333333;
    font-size: 38rpx;
  }
}
</style>
