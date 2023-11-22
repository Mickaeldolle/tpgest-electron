<script setup>
import team from '../../store/team';
const teamStore = team();

teamStore.$team.get();


</script>

<template>
  <div v-for="(member, index) in teamStore.$team.teamList" :key="index" class="list-group mb-2">
    <RouterLink class="list-group-item list-group-item-action" :to="{ name: 'planningView', params: { id: member.id }}">
        {{ member.name }}
    </RouterLink>
  </div>
</template>