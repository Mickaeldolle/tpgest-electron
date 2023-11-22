import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('mainState', () => {
  const $main = ref({
    async loadAllRoles(array) {
      const response = await fetch("http://localhost:3000/roles")
      const data = await response.json();
      array.value = data;
    },
    async loadAllContracts(array) {
      const response = await fetch("http://localhost:3000/contracts")
      const data = await response.json();
      array.value = data;
    },
    async loadAllTeams(array) {
      const response = await fetch("http://localhost:3000/teams")
      const data = await response.json();
      array.value = data;
    },
    async loadAllStatus(array) {
      const response = await fetch("http://localhost:3000/statuss")
      const data = await response.json();
      array.value = data;
    }
  })
  return {
    $main
  }
})
