<script setup>
import { useCounterStore } from "../store/counter";

const store = useCounterStore();
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline" @click="store.increment()">
      Nice #{{ store.counter }}
    </h1>
    <router-link to="/"> go copy! </router-link>
  </div>
</template>

<style scoped></style>
