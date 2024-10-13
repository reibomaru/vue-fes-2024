<template>
  <bar :data="data" :options="options" />
</template>

<script setup lang="ts">
import { ChartData, ChartOptions } from "chart.js";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps<{
  score: Promise<number[]>;
}>();

const score = await props.score;

const data: ChartData<"bar"> = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Score",
      backgroundColor: "#4CA7EC",
      data: score,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style lang="scss" scoped></style>
