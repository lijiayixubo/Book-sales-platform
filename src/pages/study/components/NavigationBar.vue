<script lang="ts" setup>

</script>

<template>
  <uni-nav-bar :fixed="true" :status-bar="true" :border="false" background-color="#c9e2f6" left-width="300rpx"
    right-width="300rpx">
    <template #left>
      <text class="my_study">
        购买记录
      </text>
    </template>
  </uni-nav-bar>
</template>

<style lang="scss" scoped>
.my_study {
  color: #333333;
  font-size: 36rpx;
  font-weight: bold;
  padding-left: 14rpx;
}
</style>
