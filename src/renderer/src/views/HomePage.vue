<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="homePage-template">
    <img class="main-icon" src="../../src/assets/icon.png" alt="">
    <div class="action-list flex justify-evenly">
      <RouterLink class="" to="/employees"><v-btn variant="tonal">Liste salarié</v-btn></RouterLink>
      <RouterLink class="" to="/daily-planning"><v-btn variant="tonal">Nouveau planning</v-btn></RouterLink>
      <RouterLink class="" to="/small-machine"><v-btn variant="tonal">Liste petite matériel interne</v-btn></RouterLink>
      <RouterLink class="" to="/intern-machine"><v-btn variant="tonal">Liste engins interne</v-btn></RouterLink>
      <RouterLink class="" to="/external-machine"><v-btn variant="tonal">Liste matériel location</v-btn></RouterLink>
    </div>
  </div>
</template>

<style scoped>
.action-list {
  position: relative;
  top: 20%;
}
.main-icon {
  margin-top: 24px;
}
</style>