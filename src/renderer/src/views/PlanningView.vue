<script setup>
import { useRoute } from 'vue-router';
import { watchEffect, ref } from 'vue';
import addElementModalOnTeamModal from '../components/modals/addElementOnTeamModal.vue'
import team from '../../store/team';
import tool from '../../store/tool';
import employee from '../../store/employees';

const route = useRoute();
const employeeStore = employee();
const teamStore = team();
const toolStore = tool();

const addElementModalState = ref(false);
/**
 * Return filtered team by id
 */
let renderTeam;
/**
 * Reçoit la valeur renvoyé par la fonction qui affiche la modal
 * Sert a modifier dynamiquement la props envoyé a la modal
 */
let sendPropsToModal = ref({
  elements: null,
  text: null
})

if (employeeStore.$employee.employeeslist.length === 0) {
  employeeStore.$employee.get();
}

function updateselectedTeam(id) {
  renderTeam = teamStore.$team.teamList.find(el => el.id == id);
};

function showAddElementModal(values, text) {
  addElementModalState.value = true
  sendPropsToModal.value.elements = values;
  sendPropsToModal.value.text = text;
}

function closeModalBtn() {
  addElementModalState.value = false;
};

toolStore.$tool.get();

watchEffect(() => {
  updateselectedTeam(route.params.id);
  teamStore.$team.getToolsByTeam(route.params.id);
});
</script>
<template>
  <section class="team-view">
    <addElementModalOnTeamModal v-if="addElementModalState" :AllTeamElements="sendPropsToModal"
      @close-modal="closeModalBtn" />

    <header class="team-view__header">
      <h4 class="team-name font-weight-bold">Equipe {{ renderTeam.name }}</h4>
      {{ renderTeam.site }} - {{ renderTeam.client }}
    </header>

    <div class="team__panel">

      <section class="team__section">
        <h5>Equipe</h5>
        <ul v-for="(member, index) in renderTeam.employee" :key="index" class="list-group">
          <li class="list-group-item mb-1 d-flex justify-content-between">
            {{ member }}
            <button class="btn">
              <font-awesome-icon class="icon delete-icon" :icon="['fas', 'trash']" />
            </button>
          </li>
        </ul>
        <button class="btn btn-outline-primary"
          @click="showAddElementModal(employeeStore.$employee.employeeslist, 'employee')">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </section>

      <section class="team__section">
        <h5>Engins</h5>
        <ul v-for="(el, index) in renderTeam.engin" :key="index" class="list-group">
          <li class="list-group-item mb-1 d-flex justify-content-between">
            {{ el.label }}
            <button class="btn">
              <font-awesome-icon class="icon delete-icon" :icon="['fas', 'trash']" />
            </button>
          </li>
        </ul>
        <button class="btn btn-outline-primary" @click="showAddElementModal(toolStore.$tool.engin, 'engin')">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </section>

      <section class="team__section">
        <h5>Outillage</h5>
        <ul v-for="(el, index) in renderTeam.outillage" :key="index" class="list-group">
          <li class="list-group-item mb-1 d-flex justify-content-between">
            {{ el.label }}
            <button class="btn">
              <font-awesome-icon class="icon delete-icon" :icon="['fas', 'trash']" />
            </button>
          </li>
        </ul>
        <button class="btn btn-outline-primary" @click="showAddElementModal(toolStore.$tool.outillage, 'outillage')">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </section>

      <section class="team__section">
        <h5>Equipement</h5>
        <ul v-for="(el, index) in renderTeam.equipement" :key="index" class="list-group">
          <li class="list-group-item mb-1 d-flex justify-content-between">
            {{ el.label }}
            <button class="btn">
              <font-awesome-icon class="icon delete-icon" :icon="['fas', 'trash']" />
            </button>
          </li>
        </ul>
        <button class="btn btn-outline-primary" @click="showAddElementModal(toolStore.$tool.equipement, 'equipement')">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </section>
    </div>
  </section>
</template>

<style scoped>
.team-view__header {
  border-bottom: 1px solid;
  margin-bottom: 16px;
  padding-bottom: 5px;
}

.team__panel {
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
}

/* .team__section {
  margin-bottom: 18px; 
  height: 300;
  overflow: auto;
  width: 32%;
  padding: 16px;
} */
</style>