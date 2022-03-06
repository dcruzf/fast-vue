import { defineStore } from "pinia";
import  dataJSON from "../../public/articles.json";

export const useArticlesStore = defineStore("articlesStore", {
  state: () => ({
    articles: dataJSON.articles,
    tags: dataJSON.tags,
  }),
  getters: {
    all: (state) => state.articles,
    articleById: (state) => (articleId) =>
      state.articles.find((article) => article.id == articleId),
    articlesByTag: (state) => (tagName) =>
        state.articles.filter((article) => article.tags.includes(tagName)),
    allTags: (state) => state.tags
  },
});
