<template>
  <div
    class="bg-base-200 flex flex-col items-center gap-20 py-20 px-5 sm:px-10"
  >
    <div
      class="text-primary-content glass rounded-box -mt-48 grid w-full max-w-screen-xl gap-4 bg-opacity-60 transition-all duration-200 xl:pb-0 md:w-4/5"
    >
      <div class="text-sm text-center -mt-5 self-center">
        {{ article.date }}
      </div>

      <div
        id="article"
        class="flex flex-col py-20 px-5 sm:px-10 pt-0 pb-10 transition-all duration-200"
      >
        <div class="text-center pb-10">
          <h1
            class="sm:text-3xl font-bold sm:pt-5 pt-0 text-lg transition-all duration-200"
          >
            {{ article.title }}
          </h1>
          <h2 class="text-2lg sm:text-2xl">{{ article.subtitle }}</h2>
        </div>
        <article
          class="text-base-content text-justify prose self-center"
          v-html="article.text"
        ></article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useArticlesStore } from "../store/article";

const route = useRoute();
const router = useRouter();
const store = useArticlesStore();

function getArticleOr404(articleId) {
  let article = store.articleById(articleId);
  if (!article) {
    router.push("/");
  }
  return article;
}
const article = getArticleOr404(route.params.id);
</script>

<style></style>
