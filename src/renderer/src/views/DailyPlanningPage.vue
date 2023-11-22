<script setup>

import { ref } from 'vue';
import { RouterView } from 'vue-router';
import TeamList from '../components/TeamList.vue';
import DepotComponent from '../components/DepotComponent.vue';

const depotElementsState = ref(false)
function toggleDepotModal() {
  depotElementsState.value = !depotElementsState.value
}
function closeModalBtn() {
  depotElementsState.value = false
};

</script>

<template>
  <div class="daily-planning-template">
    <h2 class="view-title">Planning du jour</h2>
    <div class="content">
      <div class="left">
        <TeamList />
      </div>
      <div class="right w-100">
        <RouterView class="planningView" />
        <DepotComponent v-if="depotElementsState" @close-modal="closeModalBtn" />
      </div>
      <button class="btn btn-primary btn-depot" @click="toggleDepotModal">Voir le dépot</button>
    </div>
  </div>
</template>

<style scoped>
.btn-depot {
  position: absolute;
  bottom: 50px;
  right: 50px;
}

.content {
  padding: 16px;
}

.view-title {
  font-size: 1.6rem;
  border-bottom: 1px solid;
  margin-top: 16px;
  margin-bottom: 16px;
}

.left {
  width: 15%;
}

.content {
  display: flex;
  justify-content: space-between;
  max-height: 100%;
}

.planningView {
  /* border-left: 1px solid; */
  padding: 16px;
  width: 84%;
  /* height: 60vh;
  border-bottom: 1px solid; */
}
</style>
