<script lang="ts" setup>
import Item from './Category/Item.vue'
</script>

<template>
  <view grid grid-cols-4 grid-rows-2 p="x-2 b-4" center mt rounded-2
    style="box-shadow: 0 0 40rpx 0 rgba(215, 215, 215, 0.35)">
    <Item title="全部图书" icon="qb" linear-gradient="linear-gradient(-44deg, #55ffff 14%, #00aaff 85%)" />
    <Item title="查找图书" icon="qd" linear-gradient="linear-gradient(-44deg, #aaff7f 14%, #55aaff 85%)" />
    <Item title="订阅图书" icon="hd" linear-gradient="linear-gradient(-44deg, #aaaaff 14%, #55aaff 85%)" />
    <Item title="筛选图书" icon="cs" linear-gradient="linear-gradient(-224deg, #aa55ff 14%, #55aaff 84%)" />
    <Item title="下载图书" icon="yw" linear-gradient="linear-gradient(-44deg, #20c5ad 14%, #55aaff 82%)" />
    <Item title="热门图书" icon="jg" linear-gradient="linear-gradient(-44deg, #aaaaff 14%, #aaffff 85%)" />
    <Item title="享借图书" icon="sf" linear-gradient="linear-gradient(-44deg, #f7ff57 14%, #ff6af3 85%)" />
    <Item title="电子图书" icon="dsj" linear-gradient="linear-gradient(-44deg, #f57ffd 14%, #91e8fb 84%)" />
  </view>
</template>
