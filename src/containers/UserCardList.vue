<template>
  <transition mode="out-in">
    <suspense>
      <div class="card-wrapper">
        <user-card-container
          v-for="user in users"
          :key="user.id"
          :user="user"
        />
      </div>
      <template #fallback>
        <div class="card-wrapper">
          <div v-for="user in users" :key="user.id">
            <skeleton-user-card />
          </div>
        </div>
      </template>
    </suspense>
  </transition>
</template>

<script setup lang="ts">
import UserCardContainer from "../containers/UserCardContainer.vue";
import SkeletonUserCard from "../components/SkeletonUserCard.vue";
import { useUserAsync } from "../composables/useExternalData";

const users = await useUserAsync();
</script>

<style lang="scss" scoped>
.card-wrapper {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0.3;
}
</style>
