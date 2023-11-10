<script setup>
import { RouterView } from 'vue-router'
import TopNavBar from './components/TopNavBar.vue'
</script>

<template>
  <TopNavBar class="main-nav-left" />
  <RouterView class="view" />
</template>

<style lang="less">
@import './assets/css/styles.less';
#app {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
}
.main-nav-left {
  width: 5vw;
}
.view {
  text-align: center;
  width: 85vw;
  margin-right: 24px;
}
</style>
