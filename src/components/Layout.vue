<template>
  <div :data-theme="store.theme">
        <Navbar />
    <div class="rounded-lg shadow bg-base-200 drawer h-screen rounded-none">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <router-view />
        <button class="btn btn-primary" @click="store.randomTheme()">
          change
        </button>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <DrawerMenu />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore, themes } from "../store/theme";
import DrawerMenu from "./DrawerMenu.vue";
import Navbar from './NavBar.vue'
const store = useThemeStore();
</script>

<style scoped></style>
