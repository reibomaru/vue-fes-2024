<template>
  <div class="container">
    <div class="profile">
      <img class="icon" :src="blobImageUrl" />
      <div>
        <h3 class="text-xl-bold">{{ name }}</h3>
        <p class="text-sm">{{ description }}</p>
      </div>
    </div>
    <suspense :suspensible="shouldWaitChartLoaded">
      <div class="chart">
        <score-chart :score="score" />
      </div>
      <template #fallback>
        <skeleton-score-chart />
      </template>
    </suspense>
  </div>
</template>

<script setup lang="ts">
import ScoreChart from "./ScoreChart.vue";
import SkeletonScoreChart from "./SkeletonScoreChart.vue";

defineProps<{
  name: string;
  description: string;
  blobImageUrl: string;
  score: Promise<number[]>;
  shouldWaitChartLoaded?: boolean;
}>();
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
