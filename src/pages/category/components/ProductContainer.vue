<script lang="ts" setup>
import Product from './ProductContainer/Product.vue'
import { queryProductById } from '@/api/category';

let products = $ref<any>()
products = queryProductById().data.current_data;

</script>

<template>
  <view class="container">
    <view class="products">
      <Product v-for="item, index in products" :key="index" :product="item" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.container {
  background-color: #c9e2f6;
  border-top-left-radius: 30rpx;
  border-top-right-radius: 30rpx;
  padding: 30rpx 35rpx;
  position: relative;
  box-sizing: border-box;

  .tab {
    display: flex;
    position: relative;
    justify-content: space-around;

    .select_btn {
      position: relative;

      image {
        width: 14rpx;
        height: 8rpx;
        position: absolute;
        top: 45%;
        left: 120%;

        &.rotate {
          transform: rotate(180deg);
        }
      }
    }

    text {
      color: #4d555d;
      font-size: 30rpx;

      &.active {
        color: #f38e48;
      }
    }
  }

  .products {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20rpx;
    justify-content: space-between;
  }
}
</style>
