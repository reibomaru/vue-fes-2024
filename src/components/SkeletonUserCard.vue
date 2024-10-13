<template>
  <div class="container">
    <div class="profile">
      <div class="icon skeleton"></div>
      <div class="info">
        <div class="skeleton w50 h28"></div>
        <div class="skeleton w100 paragraph"></div>
      </div>
    </div>
    <div class="chart skeleton"></div>
  </div>
</template>

<script setup lang="ts"></script>

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

  .info {
    width: 200px;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .chart {
    flex: 1;
  }
}
</style>
