<script lang="ts" setup>
defineProps<{
  icon: string
  title: string
  linearGradient: string
}>()

</script>

<template>
  <view center flex-col mt>
    <view w-70 h-70 rounded-full center p-1 :style="{ backgroundImage: linearGradient }">
      <image w-50 h-50 :src="`/static/images/icons/index/${icon}.png`" />
    </view>
    <text text="22 #333333" m="t-0.5">
      {{ title }}
    </text>
  </view>
</template>
