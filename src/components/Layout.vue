<template>
  <div class="bg-base-100 drawer h-screen" :data-theme="store.theme">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div
      class="drawer-content"
      style="scroll-behavior: smooth; scroll-padding-top: 5rem"
    >
      <div
        class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur text-primary-content"
      >
        <Navbar />
      </div>
      <div class="" style="scroll-behavior: smooth; scroll-padding-top: 5rem">
        <Hero />
        <router-view />
      
      </div>
    </div>
   <DrawerMenu />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useThemeStore, themes } from "../store/theme";
import DrawerMenu from "./DrawerMenu.vue";
import Navbar from "./NavBar.vue";
import Hero from "./Hero.vue";
import Card from "./Card.vue";
const store = useThemeStore();
</script>

<style scoped></style>
