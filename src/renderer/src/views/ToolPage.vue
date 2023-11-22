<script setup>
import { ref } from 'vue'
import deleteModal from '../components/modals/deleteModal.vue'
// import updateEmployeeModal from '../components/modals/updateEmployee.vue'
import tool from '../../store/tool';

const toolStore = tool();

toolStore.$tool.get();

const allTools = []

toolStore.$tool.engin.forEach(el => allTools.push(el))
toolStore.$tool.transport.forEach(el => allTools.push(el))
toolStore.$tool.outillage.forEach(el => allTools.push(el))
toolStore.$tool.equipement.forEach(el => allTools.push(el))

const deleteModalState = ref(false);
// const updateEmployeeModalState = ref(false)


// function showUpdateEmployeeModal(employee) {
//   employeeInfo.value = employee;
//   updateEmployeeModalState.value = !updateEmployeeModalState.value
// }

function showdeleteModal () {
  deleteModalState.value = !deleteModalState.value
}
function closeModalBtn() {
//   updateEmployeeModalState.value = false
  deleteModalState.value = false
}



</script>

<template>
  <div class="employee-list__template">
     <deleteModal v-if="deleteModalState" message="Êtes vous sur de vouloir supprimer ce matériel ?" @close-modal="closeModalBtn"/>
    <!--<updateEmployeeModal v-if="updateEmployeeModalState" :employee="employeeInfo" @close-modal="closeModalBtn"/> -->
    <h2 class="view-title">Liste matériel</h2>
    <!-- Section pour filtrer les engins -->
    <table class="table" theme="ligth">
    <thead>
      <tr>
        <th>
          Reférence
        </th>
        <th scope="col">
          Label
        </th>
        <th scope="col">
          Equipe
        </th>
        <th scope="col">
          type
        </th>
        <th scope="col">
          Début location
        </th>
        <th scope="col">
          Fin location
        </th>
        <th scope="col">
          Loueur
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(tool, index) in allTools" :key="index">
        <td>{{ tool.intern_identification ?? '/' }}</td>
        <td>{{ tool.label ?? '/' }}</td>
        <td>{{ tool.team ?? '/' }}</td>
        <td>{{ tool.type ?? '/' }}</td>
        <td>{{ tool.starting_rental ?? '/' }}</td>
        <td>{{ tool.ending_rental ?? '/' }}</td>
        <td>{{ tool.rental_compagny ?? '/' }}</td>
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
