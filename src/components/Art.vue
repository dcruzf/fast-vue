<script setup>
import { useRoute } from "vue-router";
import { useArticlesStore } from "../store/article";

const route = useRoute();
const store = useArticlesStore();

const article = store.articleById(route.params.id);
</script>
<template>
  <h1 class="text-4xl text-center">{{ article }}</h1>
</template>
