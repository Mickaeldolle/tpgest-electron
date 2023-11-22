<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <div class="homePage-template">
    <img class="main-icon" src="../../src/assets/icon.png" alt="">
    <div class="action-list d-flex">
      <form class="form m-auto w-25 mt-5">
        <div class="form-floating mb-3">
          <input id="floatingInput" type="email" class="form-control" placeholder="name@example.com">
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
        <input id="floatingInput" type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Password</label>
      </div>
        <div class="mb-3 form-check">
          <input id="exampleCheck1" type="checkbox" class="form-check-input">
          <label class="form-check-label" for="exampleCheck1">Se souvenir</label>
        </div>
        <button class="btn btn-primary d-flex m-auto w-100 text-center justify-content-center">Submit</button>
      </form>
    </div>
  </div>
</template>
