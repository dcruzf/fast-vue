<script setup>
import { useArticlesStore } from "../store/article";
defineEmits(["toggle"]);

const store = useArticlesStore();
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
        class="menu flex flex-col px-5 text-primary-content text-xl"
        @click="$emit('toggle')"
      >
        <li class="hover-bordered">
          <router-link :to="{ name: 'homeComp' }" class="flex gap-4">
            <span class="flex-none material-icons">home</span>
            <span class="flex-1">home</span>
          </router-link>
        </li>
      </ul>
      <ul
        v-for="tag in store.tags"
        :key="tag.tagId"
        class="menu flex flex-col px-5 text-primary-content text-xl"
      >
        <li class="hover-bordered">
          <router-link
            :to="{ name: 'tagsComp', params: {tagName: tag.tagId}}"
            class="flex gap-4"
            @click="$emit('toggle')"
          >
            <span class="flex-none material-icons">{{ tag.icon }}</span>

            <span class="flex-1">{{ tag.name }}</span>
          </router-link>
        </li>
      </ul>

      <!-- <div v-for="h in history" :key="h.year" class="group">
        <ul
          class="menu flex flex-col px-5 text-primary-content text-xl"
          @click="$emit('toggle')"
        >
          <li class="hover-bordered">
            <router-link
              :to="/date/ + h.year"
              @click="$emit('toggle')"
              class="flex gap-4"
            >
              <span class="flex-none material-icons">calendar_month</span>
              <span class="flex-1">{{ h.year }}</span>
            </router-link>
          </li>
        </ul>
        <ul
          v-for="m in h.months"
          :key="m"
          class="menu menu-compact flex-col text-primary-content text-sm pl-10 hidden group-hover:block"
        >
          <li class="hover-bordered">
            <router-link :to="/date/ + h.year">{{ m }}</router-link>
          </li>
        </ul>
      </div> -->

      <ul class="menu flex flex-col px-5 text-primary-content text-xl">
        <li class="hover-bordered">
          <router-link :to="{name: 'aboutComp'}" class="flex gap-4" @click="$emit('toggle')">
            <span class="flex-none material-icons">person</span>
            <span class="flex-1">about</span>
          </router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style></style>
