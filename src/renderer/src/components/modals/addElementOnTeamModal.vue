<script setup>
defineEmits(['closeModal'])

const props = defineProps({
  AllTeamElements: Object
})

console.log(props.el)

</script>



<template>
  <div class="modal">
    <form class="text-end w-50 p-3 form-el">
      <font-awesome-icon class="icon mb-3" icon="fa-solid fa-xmark" @click="$emit('closeModal')" />
      <select class="form-select mb-3">
        <option selected>Selectionnez un salarié</option>
        <option v-for="value, index in props.AllTeamElements.elements" :key="index">
          {{ value.label ?? value.nickname }}
        </option>
      </select>
      <button class="btn btn-primary" @click="$emit('closeModal')">
        Ajouter
      </button>
      <button class="btn btn-secondary ms-2" @click="$emit('closeModal')">
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

}

.icon {
  font-size: 1.6rem;
  cursor: pointer;
}
</style>

