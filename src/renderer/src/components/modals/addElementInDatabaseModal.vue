<script setup>
import { ref } from 'vue';
import main from '../../../store/index'
import employee from '../../../store/employees'

defineEmits(['closeModal']);

const employeeStore = employee();
const mainStore = main();

const newEmployee = ref({
  intern_identification: null,
  firstname: null,
  lastname: null,
  contract_id: 'Selectionnez un contract',
  role_id: null,
  status_id: null,
  team_id: null,
})

const roles = ref();
const contracts = ref();
const teams = ref();
const status = ref();

mainStore.$main.loadAllContracts(contracts)
mainStore.$main.loadAllRoles(roles)
mainStore.$main.loadAllStatus(status)
mainStore.$main.loadAllTeams(teams)

</script>

<template>
  <div class="modal">
    <form class="text-end w-50 p-3 form-el" @submit="employeeStore.$employee.createEmployee(newEmployee)">
      <font-awesome-icon class="icon mb-3" icon="fa-solid fa-xmark" @click="$emit('closeModal')" />
      <div class="form-floating mb-3">
        <input id="floatingInput" v-model="newEmployee.intern_identification" type="text" class="form-control"
          placeholder="name@example.com">
        <label for="floatingInput">Matricule</label>
      </div>
      <div class="form-floating mb-3">
        <input id="floatingInput" v-model="newEmployee.firstname" type="text" class="form-control"
          placeholder="name@example.com">
        <label for="floatingInput">Prénom</label>
      </div>
      <div class="form-floating mb-3">
        <input id="floatingInput" v-model="newEmployee.lastname" type="text" class="form-control"
          placeholder="name@example.com">
        <label for="floatingInput">Nom</label>
      </div>
      <select v-model="newEmployee.contract_id" class="form-select mb-3">
        <option selected disabled>Attributer un contrat</option>
        <option v-for="(contract, index) in contracts" :key="index" :value="contract.id">{{ contract.label }}</option>
      </select>
      <select v-model="newEmployee.role_id" class="form-select mb-3" aria-label="Default select example">
        <option selected disabled>Attribuer un role</option>
        <option v-for="(role, index) in roles" :key="index" :value="role.id">{{ role.label }}</option>
      </select>
      <select v-model="newEmployee.team_id" class="form-select mb-3" aria-label="Default select example">
        <option selected disabled>Attribuer une equipe</option>
        <option v-for="(team, index) in teams" :key="index" :value="team.id">{{ team.name }} | {{ team.site }}</option>
      </select>
      <select v-model="newEmployee.status_id" class="form-select mb-3" aria-label="Default select example">
        <option selected disabled>Attribuer un status</option>
        <option v-for="(stat, index) in status" :key="index" :value="stat.id">{{ stat.label }}
        </option>
      </select>
      <button class="btn me-4 btn-primary" type="submit">
        Ajouter
      </button>
      <button class="btn btn-secondary" @click="$emit('closeModal')">
        Annuler
      </button>
    </form>
  </div>
</template>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  padding: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.706);
  z-index: 50;
  position: fixed;
  display: flex;
}

.form-el {
  width: 50%;
  background-color: #ffffff;
  margin: auto;
  border-radius: 20px;
}

.icon {
  font-size: 1.6rem;
  cursor: pointer;
}
</style>