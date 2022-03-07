<script setup>
import { useArticlesStore } from "../store/article";
defineEmits(["toggle"]);

const store = useArticlesStore();
const tags = store.allTags;
</script>
<template>
  <div
    class="drawer-side"
    style="scroll-behavior: smooth; scroll-padding-top: 5rem"
  >
    <label for="drawer" class="drawer-overlay"></label>
    <aside class="w-80 bg-primary bg-blend-hue bg-opacity-80">
      <div class="z-20 sticky top-0 items-center gap-2 px-4 py-2 shadow-sm">
        <div
          class="text-primary-content text-bold text-lg text-center transition-all duration-200 md:text-3xl"
        >
          <span class="lowercase">dcruzf's blog</span>
        </div>
      </div>
      <ul
        class="menu menu-compact flex flex-col px-5 text-primary-content text-xl"
        @click="$emit('toggle')"
      >
        <li>
          <router-link to="/" class="flex gap-4 hover:glass">
            <span class="flex-none material-icons">home</span>
            <span class="flex-1">home</span>
          </router-link>
        </li>
      </ul>
      <ul
        v-for="tag in tags"
        :key="tag.tagId"
        class="menu menu-compact flex flex-col px-5 text-primary-content text-xl"
      >
        <li>
          <router-link
            :to="/tag/ + tag.tagId"
            class="flex gap-4 hover:glass"
            @click="$emit('toggle')"
          >
            <span class="flex-none material-icons">{{ tag.icon }}</span>
            <span class="flex-1">{{ tag.name }}</span>
          </router-link>
        </li>
      </ul>
      <ul
        class="menu menu-compact flex flex-col px-5 text-primary-content text-xl"
      >
        <li>
          <router-link
            to="/about"
            class="flex gap-4 hover:glass"
            @click="$emit('toggle')"
          >
            <span class="flex-none material-icons">person</span>
            <span class="flex-1">about</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style></style>
