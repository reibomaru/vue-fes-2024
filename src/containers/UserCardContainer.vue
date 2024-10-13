<template>
  <user-card
    :name="user.name"
    :description="user.description"
    :user-id="user.id"
    :blob-image-url="imageUrl"
  />
</template>

<script setup lang="ts">
import { useBlobImageAsync, User } from "../composables/useExternalData";
import UserCard from "../components/UserCard.vue";

const props = defineProps<{
  user: User;
}>();

const imageUrl = await useBlobImageAsync(props.user.avatarUrl);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem #ccc;
  width: 600px;
  height: 300px;
  background: white;

  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon {
    width: 50px;
    height: 50px;
  }

  .chart {
    flex: 1;
    height: 0;
  }
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
