<script lang="ts" setup>
import LoginHeader from './components/LoginHeader.vue'
import NavigationBar from './components/NavigationBar.vue'

</script>

<template>
  <view class="mine">
	  <image src="/src/static/images//pages/mine/bg-qj.jpg" class="bg-img"></image>
    <NavigationBar />
    <LoginHeader />
  </view>
</template>

<style lang="scss" scoped>
.bg-img{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0px;
	left: 0;
	z-index:-1;
}
</style>
