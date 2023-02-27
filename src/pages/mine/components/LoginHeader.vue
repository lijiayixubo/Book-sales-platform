<script lang="ts" setup>
const { isLogin, details, switchLoginState } = $(useUser())

const username = computed(() => (isLogin ? details?.username : '点击登录'))
const avatar = computed(() => (isLogin ? details?.headImg : '/static/images/icons/mine/user.png'))
const learnTime = computed(() =>
  isLogin ? `学习时长：${(details?.learnTime as number / 3600).toFixed(2)}小时` : '新用户专属200D币礼包'
)

const toLogin = () => {
  isLogin ? '' : switchLoginState('1')
}


</script>

<template>
  <view class="flex px-2" w-full>
    <view relative>
      <image :src="avatar" w-120 h-120 rounded-full class="b b-#f38e48" />
    </view>
    <view m="y-1 x-4" flex="~ col">
      <text text="40 #4d555d" @click="toLogin">
        {{ username }}
      </text>
      <view between w-full>
        <text text="30 #f38e48">
          {{ learnTime }}
        </text>
      </view>
    </view>
  </view>
</template>
