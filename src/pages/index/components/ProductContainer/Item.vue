<script lang="ts" setup>
import type { IProduct } from '@/typings/interface'

const { item } = defineProps<{ item: IProduct }>()


</script>

<template>
  <view class="item">
    <image :src="item.coverImg" />
    <view class="right">
      <text class="title">
        {{ item.title }}
      </text>
      <view class="second">
        <image v-for="i in 5" :key="i" src="@/static/images/icons/common/fire.png" />
      </view>
      <view class="user-price">
        <view class="user">
          <image src="@/static/images/icons/common/user.png" />
          <text>{{ item.buyNum }}</text>
        </view>
        <view class="price">
          <view>
            <text class="dollor">
              ¥
            </text>
            <text class="price">
              {{ item.amount }}
            </text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.item {
  width: 100%;
  display: flex;
  margin-bottom: 40rpx;

  image {
    width: 300rpx;
    height: 175rpx;
    border-radius: 10rpx;
    flex-shrink: 0;
  }

  .right {
    display: flex;
    margin-left: 15rpx;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: #333333;
      font-size: 27rpx;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }

    .second {
      display: flex;
      align-items: center;

      text {
        color: #7f7f7f;
        font-size: 24rpx;
        margin-right: 10rpx;
      }

      image {
        width: 27rpx;
        height: 27rpx;
        margin-right: 5rpx;
      }
    }

    .user-price {
      display: flex;
      justify-content: space-between;

      .user {
        display: flex;
        align-items: center;

        image {
          width: 32rpx;
          height: 32rpx;
        }

        text {
          font-size: 28rpx;
          color: #7f7f7f;
          margin-left: 5rpx;
        }
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
          margin-left: 20rpx;

          &:last-child {
            color: #e51b11;
            font-size: 40rpx;
          }
        }
      }
    }
  }
}
</style>
