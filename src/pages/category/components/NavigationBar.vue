<script lang="ts" setup>
import Search from '@/components/Search.vue'
</script>

<template>
  <uni-nav-bar :fixed="true" :status-bar="true" :border="false" background-color="#c9e2f6" left-width="0" right-width="0">
    <Search color="#999999" background-color="#d8ecf9" />
  </uni-nav-bar>
</template>
