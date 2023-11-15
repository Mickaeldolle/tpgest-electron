<script setup>

const props = defineProps({
  employee: Object
})

defineEmits(['closeModal'])

</script>



<template>
  <div class="modal modal--update">
    <form class="text-end w-50 p-3 form-el" >
      <font-awesome-icon class="icon" icon="fa-solid fa-xmark" @click="$emit('closeModal')"/>
      <v-text-field label="Name"></v-text-field>
      <v-text-field label="Phone Number"></v-text-field>
      <v-text-field label="E-mail"></v-text-field>
      <v-select label="Select"></v-select>
      <v-btn class="me-4">
        Enregistrer
      </v-btn>
      <v-btn @click="$emit('closeModal')">
        Annuler
      </v-btn>
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

  }
  .icon {
    font-size: 1.6rem;
    cursor: pointer;
  }
</style>

