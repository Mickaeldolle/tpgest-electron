<script setup>
import { ref } from 'vue';
import deleteModal from '../components/modals/deleteModal.vue';
import updateEmployeeModal from '../components/modals/updateEmployee.vue';
import addElementInDatabaseModal from '../components/modals/addElementInDatabaseModal.vue';
import employee from '../../store/employees';

const employeeStore = employee();
const employeeInfo = ref();

const deleteModalState = ref(false);
const updateEmployeeModalState = ref(false);
const addElementInDatabaseModalState = ref(false)


function showUpdateEmployeeModal(employee) {
  employeeInfo.value = employee;
  updateEmployeeModalState.value = true;
};
function showdeleteModal() {
  deleteModalState.value = true;
};
function showAddElementInDatabaseModal() {
  addElementInDatabaseModalState.value = true;
}
function closeModalBtn() {
  updateEmployeeModalState.value = false
  deleteModalState.value = false
  addElementInDatabaseModalState.value = false
};
if (employeeStore.$employee.employeeslist.length === 0) {
  employeeStore.$employee.get();
};

</script>

<template>
  <div class="employee-list__template">
    <addElementInDatabaseModal v-if="addElementInDatabaseModalState" @close-modal="closeModalBtn" />
    <deleteModal v-if="deleteModalState" message="Êtes vous sur de vouloir supprimer ce salarié ?"
      @close-modal="closeModalBtn" />
    <updateEmployeeModal v-if="updateEmployeeModalState" :employee="employeeInfo" @close-modal="closeModalBtn" />
    <h2 class="view-title">Liste des salariés</h2>
    <div class="employee__config">
      <button class="btn btn-outline-primary" @click="showAddElementInDatabaseModal">
        <font-awesome-icon class="mr-5" icon="fa-solid fa-plus" /> Ajouter un salarié
      </button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            N° matricule
          </th>
          <th scope="col">
            Prénom
          </th>
          <th scope="col">
            Nom
          </th>
          <th scope="col">
            Poste
          </th>
          <th scope="col">
            Début du contrat
          </th>
          <th scope="col">
            Fin de contract
          </th>
          <th scope="col">
            Status
          </th>
          <th scope="col">
            Equipe
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person, index) in employeeStore.$employee.employeeslist" :key="index" class="employee__item">
          <td>{{ person.intern_identification ?? '/' }}</td>
          <td>{{ person.firstname ?? '/' }}</td>
          <td>{{ person.lastname ?? '/' }}</td>
          <td>{{ person.role ?? "/" }}</td>
          <td>{{ person.contract_starting ?? "/" }}</td>
          <td>{{ person.contract_ending ?? "/" }}</td>
          <td>{{ person.status ?? "/" }}</td>
          <td>{{ person.team ?? "/" }}</td>
          <td>
            <button class="btn btn-primary" @click="showUpdateEmployeeModal(employee)">
              <font-awesome-icon class="icon update-icon" :icon="['fas', 'pen']" />
            </button>
            <button class="btn btn-danger ms-1" @click="showdeleteModal">
              <font-awesome-icon class="icon delete-icon" :icon="['fas', 'trash']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.view-title {
  font-size: 1.6rem;
  border-bottom: 1px solid;
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
