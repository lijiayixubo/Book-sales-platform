<script lang="ts" setup>
import Item from './Category/Item.vue'
</script>

<template>
  <view grid grid-cols-4 grid-rows-2 p="x-2 b-4" center mt rounded-2
    style="box-shadow: 0 0 40rpx 0 rgba(215, 215, 215, 0.35)">
    <Item title="全部" icon="qb" linear-gradient="linear-gradient(-44deg, #674dfa 14%, #baafff 85%)" />
    <Item title="前端&全栈" icon="qd" linear-gradient="linear-gradient(-44deg, #f76122 14%, #ff9458 85%)" />
    <Item title="后端&架构" icon="hd" linear-gradient="linear-gradient(-44deg, #d53a4c 14%, #fd8291 85%)" />
    <Item title="测试&测开" icon="cs" linear-gradient="linear-gradient(-224deg, #fbe444 14%, #ffb613 84%)" />
    <Item title="运维&容器" icon="yw" linear-gradient="linear-gradient(-44deg, #20c5ad 14%, #6edcd0 82%)" />
    <Item title="架构&管理" icon="jg" linear-gradient="linear-gradient(-44deg, #4d84fa 14%, #65a5ff 85%)" />
    <Item title="算法&人工智能" icon="sf" linear-gradient="linear-gradient(-44deg, #ee56e8 14%, #fb9bf7 85%)" />
    <Item title="大数据" icon="dsj" linear-gradient="linear-gradient(-44deg, #2cc5e6 14%, #91e8fb 84%)" />
  </view>
</template>
