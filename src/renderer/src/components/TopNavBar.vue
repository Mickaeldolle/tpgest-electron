<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="main-nav">
    <ul class="nav__ul">
      <li class="nav__item">
        <RouterLink class="nav__link" to="/"
          ><font-awesome-icon class="link__icon" icon="house"
        /></RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/employees">
          <font-awesome-icon class="link__icon" icon="user" />
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/daily-planning">
          <font-awesome-icon class="link__icon" icon="calendar" />
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/small-machine">
          <font-awesome-icon class="link__icon" icon="hammer" />
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/intern-machine">
          <font-awesome-icon class="link__icon" icon="tractor" />
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/external-machine">
          <font-awesome-icon class="link__icon" icon="truck" />
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" to="/external-machine">
          <font-awesome-icon class="link__icon" icon="helmet-safety" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.main-nav {
  height: 100vh;
  border-right: 1px solid;
  background-color: rgb(37, 37, 75);
  box-shadow: 0px 5px 10px;
}
.nav__ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.nav__item {
  font-size: 2rem;
  text-align: center;
}
.link__icon {
  color: #586c8d;
  font-size: 3rem;
  transition: 0.2s ease;
}
.link__icon:hover {
  scale: 1.5;
}
</style>
