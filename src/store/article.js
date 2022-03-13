import { defineStore } from "pinia";

async function getJSON(url) {
  return await fetch(url)
    .then((response) => response.json())
    .then((dataJSON) => {
      return dataJSON;
    });
}

export const useArticlesStore = defineStore("articlesStore", {
  state: () => ({
    articles: null,
    tags: null,
    about: null,
    history: null,
  }),
  actions: {
    async getData() {
      const data = await getJSON("./data/data.json");
      this.articles = data.articles;
      this.tags = data.tags;
      this.about = data.about;
      this.history = data.history;
    },
  },
  getters: {
    all: (state) => state.articles,
    articleById: (state) => (articleId) =>
      state.articles.find((article) => article.id == articleId),
    articlesByTag: (state) => (tagName) =>{
      let byTag = state.articles.filter((article) => article.tags.includes(tagName))
      if (byTag.length > 0){
        return byTag
      }
      return state.articles
    },

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
