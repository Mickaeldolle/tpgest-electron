<script setup>
import { ref, onBeforeMount } from 'vue'
import deleteEmployeeModal from '../components/modals/deleteemployee.vue'
import updateEmployeeModal from '../components/modals/updateEmployee.vue'


const loadEmployees = async () => {
  const response = await fetch('http://localhost:3000/employees')
  const data = await response.json()
  employees.value = data
}
onBeforeMount(() => {
  loadEmployees()
  console.log(employees)
})

const employees = ref()

const deleteEmployeeModalState = ref(false);
const updateEmployeeModalState = ref(false)


const employeeInfo = ref()

const showUpdateEmployeeModal = (employee) => {
  employeeInfo.value = employee;
  updateEmployeeModalState.value = !updateEmployeeModalState.value
}

const showDeleteEmployeeModal = () => {
  deleteEmployeeModalState.value = !deleteEmployeeModalState.value
}

function btnClick() {
  updateEmployeeModalState.value = false
  deleteEmployeeModalState.value = false
}

</script>

<template>
  <div class="employee-list__template">
    <deleteEmployeeModal v-if="deleteEmployeeModalState" @close-modal="btnClick"/>
    <updateEmployeeModal v-if="updateEmployeeModalState" :employee="employeeInfo" @close-modal="btnClick"/>
    <h2 class="view-title">Liste des salariés</h2>
    <v-table class="employee-list__table" theme="ligth">
    <thead>
      <tr>
        <th class="text-left">
          N° matricule
        </th>
        <th class="text-left">
          Prénom
        </th>
        <th class="text-left">
          Nom
        </th>
        <th class="text-left">
          Poste
        </th>
        <th class="text-left">
          Début du contrat
        </th>
        <th class="text-left">
          Fin de contract
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(employee, key) in employees" :key="key">
        <td>{{ employee.intern_identification ?? '/' }}</td>
        <td>{{ employee.firstname ?? '/' }}</td>
        <td>{{ employee.lastname ?? '/' }}</td>
        <td>{{ employee.role ?? "/" }}</td>
        <td>{{ employee.contract_starting ?? "/" }}</td>
        <td>{{ employee.contract_ending ?? "/" }}</td>
        <td>
          <v-btn variant="tonal" color="green" @click="showUpdateEmployeeModal(employee)">
            <font-awesome-icon class="icon update-icon" :icon="['fas', 'pen']" />
          </v-btn>
          <v-btn class="ml-1" variant="tonal" color="deep-orange" @click="showDeleteEmployeeModal">
            <font-awesome-icon class="icon delete-icon" :icon="['fas', 'trash']" />
          </v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
  </div>
</template>

<style scoped>
.view-title {
  font-size: 1.6rem;
  border-bottom: 1px solid;
  margin-top: 16px;
}
.employee-list__table {
  max-height: 95vh;
}
.icon {
  margin-left: 8px;
}

</style>
