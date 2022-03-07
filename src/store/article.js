import { defineStore } from "pinia";
import dataJSON from "../assets/articles.json";

export const useArticlesStore = defineStore("articlesStore", {
  state: () => ({
    articles: dataJSON.articles,
    tags: dataJSON.tags,
    history: dataJSON.history,
    about: dataJSON.about,
  }),
  getters: {
    all: (state) => state.articles,
    articleById: (state) => (articleId) =>
      state.articles.find((article) => article.id == articleId),
    articlesByTag: (state) => (tagName) =>
      state.articles.filter((article) => article.tags.includes(tagName)),
    allTags: (state) => state.tags,
    articlesByDate: (state) => {
      (year, month) =>
        state.articles.filter(
          (article) =>
            article.dates.year === year && article.dates.month == month
        );
    },
  },
});
