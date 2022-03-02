<template>
  <div title="Change Theme" class="dropdown dropdown-end">
    <div tabindex="0" class="btn gap-2 normal-case btn-ghost">
      <span class="material-icons">palette</span>
    </div>
    <div
      class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto mt-16"
    >
      <ul class="menu menu-compact p-4" tabindex="0">
        <li>
          <button @click="store.changeTheme('light')">🌝  light</button>
        </li>
        <li>
          <button @click="store.changeTheme('dark')">🌚  dark</button>
        </li>
        <li>
          <button @click="store.changeTheme('bumblebee')">🐝  bumblebee</button>
        </li>
        <li>
          <button @click="store.changeTheme('emerald')">✳️  Emerald</button>
        </li>
        <li>
          <button @click="store.changeTheme('corporate')">🏢  Corporate</button>
        </li>
        <li>
          <button @click="store.changeTheme('synthwave')">🌃  synthwave</button>
        </li>

        <li>
          <button @click="store.changeTheme('forest')">🌲  forest</button>
        </li>
        <li>
          <button @click="store.changeTheme('aqua')">🐟  aqua</button>
        </li>
        <li>
          <button @click="store.changeTheme('lofi')">👓  lofi</button>
        </li>

        <li>
          <button @click="store.changeTheme('black')">🏴  black</button>
        </li>
        <li>
          <button @click="store.changeTheme('dracula')">🧛‍♂️  dracula</button>
        </li>
        <li>
          <button @click="store.changeTheme('cmyk')">🖨  CMYK</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore, themes } from "../store/theme";
const store = useThemeStore();
</script>
