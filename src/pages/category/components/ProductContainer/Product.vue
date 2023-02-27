<script lang="ts" setup>
import type { IProduct } from '@/typings/interface'

defineProps<{ product: IProduct }>()

</script>

<template>
  <view class="product">
    <image :src="product.coverImg" mode="scaleToFill" />
    <text class="title">
      {{ product.title }}
    </text>
    <view class="level_price">
      <view class="price">
        <view>
          <text class="dollor">
            ¥
          </text>
          <text class="price">
            {{ product.amount }}
          </text>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.product {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 320rpx;
  margin-bottom: 45rpx;
  border-radius: 15rpx;
  box-sizing: border-box;
  box-shadow: 0px 3px 10px 0px rgba(215, 215, 215, 0.35);

  image {
    height: 200rpx;
    width: 100%;
    border-radius: 20rpx 20rpx 0 0;
    flex-shrink: 0;
    padding-bottom: 15rpx;
  }

  .title {
    color: #555555;
    font-size: 22rpx;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-break: break-all;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    padding-inline: 15rpx;
    overflow: hidden;
  }

  .level_price {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-inline: 15rpx;
    padding-bottom: 15rpx;

    .level {
      color: #7f7f7f;
      font-size: 20rpx;
    }

    .price {
      display: flex;
      align-items: baseline;

      .dollor {
        font-size: 24rpx;
      }

      &>view {
        display: flex;
        align-items: baseline;
        margin-left: 5rpx;

        &:last-child {
          color: #e51b11;
          font-size: 30rpx;
        }
      }
    }
  }
}
</style>
