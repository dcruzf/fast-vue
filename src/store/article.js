import { defineStore } from "pinia";
import articlesJSON from '../../public/articles.json';

export const useArticlesStore = defineStore("articlesStore", {
  state: () => ({
    articles: articlesJSON,
  }),
  getters: {
    article: (state) => state.articles,
    articleById: (state) => (articleId) =>
      state.articles.find((article) => article.id == articleId),
  },
});
