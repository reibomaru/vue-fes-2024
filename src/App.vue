<template>
  <div class="container">
    <suspense>
      <user-list />
      <template #fallback> ...Loading Users </template>
    </suspense>
  </div>
</template>

<script setup lang="ts">
import "./assets/reset.scss";
import "./assets/global.scss";
import UserList from "./containers/UserList.vue";
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
}
</style>
