<script setup>
import { useArticlesStore } from "../store/article";
const store = useArticlesStore();
</script>
<template>
  <h1>{{ $route.params.id }}</h1>
  <!-- <h1>{{ store.getArticlesById($route.params.id) }}</h1> -->
  <h1>{{ store.getArticleById($route.params.id) }}</h1>
</template>
