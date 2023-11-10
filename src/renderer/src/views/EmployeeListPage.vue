<script setup>
import { ref, onMounted } from 'vue'
const loadEmployees = async () => {
  const response = await fetch('http://localhost:3000/employees')
  const data = await response.json()
  employees.value = data
}
const employees = ref()

onMounted(() => {
  loadEmployees()
})
</script>

<template>
  <div class="employee-list__template">
    <header>
      <h1 class="employee__main-title">
        <font-awesome-icon class="link__icon" icon="user" />Liste des salariés
      </h1>
      <div class="filtered-employee">
        <input id="" type="search" name="employee" />
        <p>{{ employees.length }} Salariés dans l'entreprise</p>
      </div>
    </header>
    <div class="list-container">
      <ul v-for="(employee, index) in employees" :key="index" class="ul">
        <li class="list__item">
          {{ employee.intern_identification }}
        </li>
        <li class="list__item">
          {{ employee.firstname }}
        </li>
        <li class="list__item">
          {{ employee.lastname }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.employee-list__template {
  border: 1px solid;
}
.ul {
  display: flex;
  justify-content: space-between;
}
.filtered-employee {
  text-align: start;
}
</style>
