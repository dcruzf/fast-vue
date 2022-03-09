import { defineStore } from "pinia";

function getJSON(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    });
}

const data = await getJSON("./data/data.json");

export const useArticlesStore = defineStore("articlesStore", {
  state: () => data,
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
