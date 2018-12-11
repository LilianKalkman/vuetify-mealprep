<template>
  <v-container grid-list-lg class="homeplans-container">
    <v-layout row>
      <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
    </v-layout>
    <v-layout row wrap>
      <template v-for="n in 3">
        <v-flex xs12 sm12 md4>
          <v-card>
            <v-img
              src="https://images.unsplash.com/photo-1543364195-bfe6e4932397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              height="500px"
            >
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text">MEAL</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ diets[n - 1] }}</h3>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, varius rutrum massa a, dignissim ornare dui. Cras eget velit eu dui tristique lobortis sit amet vel tellus.</div>
              </div>
            </v-card-title>
            <v-card-actions v-if="['menu'].includes($route.name)">
              <v-btn
                outline
                block
                color="black"
                @click="getRecipesVues(`${diets[n - 1]}`)"
              >Select Diet</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePlans",
  data() {
    return {
      diets: ["Vegan", "Paleo", "No-gluten"],
      recipes: []
    };
  },
  methods: {
    getRecipesVues(diet) {
      this.$store.dispatch("fetchRecipes", diet);
    }
    // async getRecipes(diet) {
    //   const API_KEY = "3a0df9a5327dbdf4b24ed626128a30b7";
    //   const APPLICATION_ID = "660a9bed";
    //   const query = diet.toLowerCase();
    //   const proxy = "https://cors-anywhere.herokuapp.com/";
    //   console.log(query);

    //   const URL = `${proxy}https://api.edamam.com/search`;
    //   try {
    //     const result = await axios.get(URL, {
    //       params: {
    //         q: query,
    //         app_id: APPLICATION_ID,
    //         app_key: API_KEY,
    //         from: 0,
    //         to: 9
    //       }
    //     });
    //     this.recipes = result.data.hits;
    //     console.log(this.recipes);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }
};
</script>

<style>
.homeplans-container {
  background-color: inherit;
  width: 100%;
  height: 100%;
}
</style>
