<script setup>

</script>

<template>
  <div class="modal">
    <div class="text-end w-50 p-3 modal__content">
      <font-awesome-icon class="icon mb-3" icon="fa-solid fa-xmark" @click="$emit('closeModal')" />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">
              Employees
            </th>
            <th scope="col">
              Employees
            </th>
            <th scope="col">
              Employees
            </th>
            <th scope="col">
              Employees
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>liste</td>
            <td>liste</td>
            <td>liste</td>
            <td>liste</td>
          </tr>
        </tbody>
      </table>
    </div>
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

.modal__content {
  width: 50%;
  background-color: #ffffff;
  margin: auto;
  border-radius: 20px;
}

.icon {
  font-size: 1.6rem;
  cursor: pointer;
  text-align: end;
}
</style>