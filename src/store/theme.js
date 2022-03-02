import { defineStore } from "pinia";
export const themes = {
  light: "light",
  dark: "dark",
  cupcake: "cupcake",
  bumblebee: "bumblebee",
  emerald: "emerald",
  corporate: "corporate",
  synthwave: "synthwave",
  retro: "retro",
  cyberpunk: "cyberpunk",
  valentine: "valentine",
  halloween: "halloween",
  garden: "garden",
  forest: "forest",
  aqua: "aqua",
  lofi: "lofi",
  pastel: "pastel",
  fantasy: "fantasy",
  wireframe: "wireframe",
  black: "black",
  luxury: "luxury",
  dracula: "dracula",
  cmyk: "cmyk",
  autumn: "autumn",
  business: "business",
  acid: "acid",
  lemonade: "lemonade",
};
export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    themeName: themes.light,
  }),
  actions: {
    changeTheme(themeName) {
      if (themes.hasOwnProperty(themeName)) {
        this.themeName = themeName;
        console.log(this.themeName);
      } else {
        throw "InvalidTheme";
      }
    },
    randomTheme() {
      const arr = Object.values(themes);
      const themeName = arr[Math.floor(Math.random() * arr.length)];
      console.log(themeName);
      this.themeName = themeName;
    },
  },
  getters: {
    theme: (state) => state.themeName,
  },
});
