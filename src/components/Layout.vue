<template>
  <div class="bg-base-100 drawer h-screen" :data-theme="store.theme">
    <input
      id="drawer"
      type="checkbox"
      class="drawer-toggle"
      v-model="drawerOpen"
    />
    <div
      id="drawer-content-upper"
      class="drawer-content"
      style="scroll-behavior: smooth; scroll-padding-top: 5rem"
      @scroll.passive="eventOnScroll"
    >
      <div
        class="sticky top-0 z-30 flex h-16 w-full justify-center text-primary-content backdrop-blur transition-all duration-400"
        :class="navClass"
      >
        <Navbar />
      </div>
      <div
        class=""
        style="
          scroll-behavior: smooth;
          scroll-padding-top: 5rem transition-all duration-400;
        "
      >
        <Hero />
        <router-view />
      </div>
    </div>
    <DrawerMenu @toggle="drawerOpen = false" />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useThemeStore, themes } from "../store/theme";
import DrawerMenu from "./DrawerMenu.vue";
import Navbar from "./NavBar.vue";
import Hero from "./Hero.vue";
import Card from "./Card.vue";
const store = useThemeStore();

const drawerOpen = ref(false);
const scrollPosition = ref(0);
const navClass = ref("");

function eventOnScroll(e) {
  if (e.target.scrollTop > 480) {
    navClass.value = "bg-primary bg-opacity-60";
  } else {
    navClass.value = "";
  }
}
</script>
<style scoped></style>
