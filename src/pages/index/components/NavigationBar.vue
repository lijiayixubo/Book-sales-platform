<script lang="ts" setup>
import Search from '@/components/Search.vue'
</script>

<template>
  <uni-nav-bar :fixed="true" :status-bar="true" :border="false" background-color="#c9e2f6" class="navbar"
    left-width="1px">
    <Search color="999999" background-color="#d8ecf9" />
  </uni-nav-bar>
</template>

<style lang="scss" scoped>
.navbar {
  :deep(.uni-navbar__header-container) {
    padding: 0;
  }

  :deep(.uni-navbar__header) {
    padding: 0;
  }
}
</style>
