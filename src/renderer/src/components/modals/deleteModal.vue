<script setup>
defineEmits(['closeModal'])
const props = defineProps({
  message: String
})
</script>


<template>
  <div class="modal modal--update">
    <form class="text-end w-50 p-3 form-el" >
      <font-awesome-icon class="icon" icon="fa-solid fa-xmark" @click="$emit('closeModal')"/>
      <div class="message mb-5">
        <font-awesome-icon :icon="['fas', 'triangle-exclamation']" />
        {{ props.message }}
      </div>
      <div class="confirm-btn">
        <v-btn color="red" variant="tonal" class="me-4">
          Confirmer
        </v-btn>
        <v-btn @click="$emit('closeModal')">
          Annuler
        </v-btn>
      </div>
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
  .message {
    font-size: 1.6rem;
    text-align: center;
  }
  .confirm-btn {
    text-align: center;
  }
</style>
