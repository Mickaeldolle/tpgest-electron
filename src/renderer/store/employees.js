import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('employeeState', () => {
  const $employee = ref({

    employeeslist: [],

    async get() {
      const response = await fetch('http://localhost:3000/employees');
      const data = await response.json();
      $employee.value.employeeslist = data;
    },
    async createEmployee(obj) {
      console.log(obj)
      obj.nickname = `${obj.firstname} ${obj.lastname}`
      const response = await fetch('http://localhost:3000/employees/', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(obj)
      })
      const result = await response.json();
      console.log(result);
      $employee.value.get();
    },
    async deleteEmployee(id) {
      const response = await fetch(`http://localhost:3000/employees/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
      })
      const result = await response.json();
      console.log(result)
    }
  })
  
  return {
    $employee
  }
})
