import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: []
  },
  mutations: {
    getRecipes: function(state, payload) {
      return (state.recipes = payload);
    }
  },
  actions: {
    async fetchRecipes(context, payload) {
      const API_KEY = "3a0df9a5327dbdf4b24ed626128a30b7";
      const APPLICATION_ID = "660a9bed";
      const query = payload.toLowerCase();
      const proxy = "https://cors-anywhere.herokuapp.com/";
      console.log(query);

      const URL = `${proxy}https://api.edamam.com/search`;
      try {
        const result = await axios.get(URL, {
          params: {
            q: query,
            app_id: APPLICATION_ID,
            app_key: API_KEY,
            from: 0,
            to: 9
          }
        });
        context.commit("getRecipes", result.data.hits);
      } catch (err) {
        console.log(err);
        context.commit("getRecipes", []);
      }
    }
  }
});
