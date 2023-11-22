import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('toolsState', () => {
  const $tool = ref({
    engin: [],
    equipement: [],
    outillage : [],
    transport: [],
    /**
     * Get all tools
     * Organize tools in differents array : engin, equipement, outillage, transport
     */
    async get() {
      const response = await fetch('http://localhost:3000/tools')
      const data = await response.json();
      $tool.value.resetData();
      data.forEach(tool => {
        $tool.value[tool.type].push(tool);
    });
    },
    resetData() {
      //TODO : modifier pour rendre dynamique !
      $tool.value.engin = []
      $tool.value.equipement = []
      $tool.value.outillage = []
      $tool.value.transport = []
    },
  })
  return {
    $tool
  }
})
