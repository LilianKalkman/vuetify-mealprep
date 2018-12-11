<template>
  <div>
    <home-plans v-if="displayHomePlans"></home-plans>
    <meal-recipes></meal-recipes>
  </div>
</template>

<script>
import HomePlans from "@/components/HomePlans.vue";
import MealRecipes from "@/components/MealRecipes.vue";

export default {
  name: "Menu",
  data() {
    return {
      currentComponent: ""
    };
  },
  components: {
    HomePlans,
    MealRecipes
  },
  computed: {
    recipes() {
      return this.$store.state.recipes;
    },
    displayHomePlans() {
      return this.recipes.length === 0;
    }
  }
};
</script>

<style>
</style>
