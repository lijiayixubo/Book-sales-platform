<script lang="ts" setup>
const { isLogin, details, switchLoginState } = $(useUser())

const username = computed(() => (isLogin ? details?.username : '点击登录'))
const avatar = computed(() => (isLogin ? details?.headImg : '/static/images/icons/mine/user.png'))
const learnTime = computed(() =>
  isLogin ? `成功的道路上充满荆棘，苦战方能成功。` : '欢迎登录图书平台'
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
