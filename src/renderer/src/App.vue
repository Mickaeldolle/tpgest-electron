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
}
.main-nav-left {
  width: 5vw;
}
.view {
  width: 90vw;
  margin: auto;
  height: 95vh;
  overflow: auto;
}
</style>
