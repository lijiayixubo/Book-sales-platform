<script lang="ts" setup>
import Search from '@/components/Search.vue'
</script>

<template>
  <view class="nav_height" />
  <Search color="#999999" background-color="white" />
</template>

<style lang="scss" scoped>
.nav_height {
  height: var(--status-bar-height);
}
</style>