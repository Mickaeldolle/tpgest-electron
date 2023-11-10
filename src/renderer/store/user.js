import { defineStore } from 'pinia'
import { ref } from 'vue'

export default defineStore('userStore', () => {
  const user = ref({
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
    delivery_address: {
      nb_address: '',
      odonym: '',
      wording_address: '',
      cp_address: '',
      city: ''
    },
    billing_address: {
      nb_address: '',
      odonym: '',
      wording_address: '',
      cp_address: '',
      city: ''
    }
  })
  const cart = ref([])
  const cookie = ref(false)
  return {
    user,
    cart,
    cookie
  }
})
