<script setup>
import Card from "./Card.vue";

const articles = [
  {
    id: 1,
    title: "Meu título massa 1",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 2,
    title: "Meu título massa 2",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 3,
    title: "Meu título massa 3",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 4,
    title: "Meu título massa 4",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 5,
    title: "Meu título massa 5",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 6,
    title: "Meu título massa 6",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 7,
    title: "Meu título massa 7",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
  {
    id: 8,
    title: "Meu título massa 8",
    abstract:
      "Qualquer coisas com alguns caracteres para fazer um bom valume no card. Qualquer coisas com alguns caracteres para fazer um bom valume no card.",
  },
];
</script>
<template>
  <div class="bg-base-200 flex flex-col items-center gap-20 py-20">
    <div
      class="text-base-content glass xl:rounded-box -mt-48 grid max-w-screen-xl gap-4 bg-opacity-60 xl:pb-0"
    >
      <div class="px-2 pt-2">
        <div class="text-primary-content rounded-box space-x-1">
          <div class="mx-2 flex-1 justify-center px-2 md:flex md:justify-start">
            <span class="text-2xl font-bold">Posts</span>
          </div>
        </div>
      </div>
      <div
        id="component-demo"
        class="flex w-full grid grid-cols-1 items-center gap-4 overflow-x-auto px-10 pt-1 pb-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div v-for="article in articles" :key="article.id">
          <Card :title="article.title" :abstract="article.abstract" />
        </div>
      </div>
    </div>
  </div>
</template>
