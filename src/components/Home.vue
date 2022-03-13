<script setup>
import { ref, reactive, watch } from "vue";
import { storeToRefs } from 'pinia'
import Card from "./Card.vue";
import { useArticlesStore } from "../store/article";
import { useRoute } from "vue-router";
const store = useArticlesStore();
const route = useRoute();

const articles = ref( store.all );


watch(
  () => route.params,
  (tagName) => {
    articles.value = store.articlesByTag(route.params.tagName)
  }
);
watch(
  () => store.articles,
  () => {
    articles.value = store.articlesByTag(route.params.tagName)
  }
);
</script>
<template>
  <div class="bg-base-200 flex flex-col items-center gap-20 py-20">
    <div
      class="text-base-content glass rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 transition-all duration-200 xl:pb-0"
    >
      <div class="px-2 pt-2">
        <div class="text-primary-content rounded-box space-x-1">
          <div
            class="mx-2 flex-1 justify-center px-2 transition-all duration-200 md:flex md:justify-start"
          >
            <span class="text-2xl font-bold">Posts</span>
          </div>
        </div>
      </div>
      <div
        id="component-demo"
        class="grid grid-cols-1 items-center gap-4 overflow-x-auto px-10 pt-1 pb-10 transition-all duration-200 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div v-if="store.articles === null">
          <Card title="Loading..." abstract="..." />
        </div>
        <div v-else v-for="article in articles" :key="article.id">
          <router-link :to="{name: 'articleComp', params: {'id': article.id}}">
            <Card :title="article.title" :abstract="article.subtitle" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
