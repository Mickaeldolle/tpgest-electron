<script setup>
import { RouterView } from 'vue-router'
import MainNavComponant from './components/MainNavComponant.vue'
</script>

<template>
  <MainNavComponant class="main-nav-left" />
  <RouterView class="view"/>
</template>

<style>
#app {
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
}
.main-nav-left {
  width: 5vw;
}
.view {
  width: 85vw;
  margin-right: 24px;
}
</style>
