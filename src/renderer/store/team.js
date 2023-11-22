import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('teamsState', () => {
  const $team = ref({

    teamList : [],

    async get() {
      const response = await fetch('http://localhost:3000/teams/');
      const data = await response.json();
      $team.value.teamList = data;
    },
    /**
     * Get tools used by a specific team and organise the tools in different array
     * @param {Number} id 
     */
    async getToolsByTeam(id) {
      const response = await fetch(`http://localhost:3000/tools/${id}`);
      const data = await response.json();
      const goodTeam = $team.value.teamList.find((el) => el.id == id)
      goodTeam.engin = [];
      goodTeam.outillage = [];
      goodTeam.equipement = [];
      goodTeam.transport = [];

      data.forEach(tool => {
        goodTeam[tool.type].push(tool);
    });

    }
  })

  return {
    $team
  }
})
