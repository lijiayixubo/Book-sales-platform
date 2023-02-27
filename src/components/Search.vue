<script lang="ts" setup>
defineProps<{ color: string, backgroundColor: string }>()
</script>

<template>
  <view class="search_container">
    <image src="@/static/images/icons/index/search.svg" style="width: 32rpx; height: 28rpx" mode="scaleToFill"
      class="search_icon" />
    <view class="search_input" confirm-type="search" :style="{ backgroundColor: `${backgroundColor}` }">
      <text>请输入搜索内容</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.search_container {
  margin-top: 5rpx;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  image {
    position: absolute;
    left: 30rpx;
  }

  .search_icon_top {
    top: 35rpx;
    left: 36rpx;
  }

  .search_input {
    height: 80rpx;
    width: 50vw;
    font-size: 24rpx;
    border-radius: 80rpx;
    padding-left: 78rpx;

    text {
      color: #a5a1a1;
      line-height: 80rpx;
    }
  }
}
</style>
