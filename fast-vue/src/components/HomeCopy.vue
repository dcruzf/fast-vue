<script setup>
import { useCounterStore } from "../store/counter";

const store = useCounterStore();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Copy #{{ store.doubleCount }}</h1>
    <router-link to="/home"> go home! </router-link>
    <button class="btn btn-primary">daisyUI Button</button>
  </div>
</template>

<style scoped></style>
