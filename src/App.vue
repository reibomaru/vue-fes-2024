<template>
  <div class="container">
    <suspense>
      <user-card-list />
      <template #fallback> ...Loading Users </template>
    </suspense>
  </div>
</template>

<script setup lang="ts">
import "./assets/reset.scss";
import "./assets/global.scss";
import UserCardList from "./containers/UserCardList.vue";
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
}
</style>
